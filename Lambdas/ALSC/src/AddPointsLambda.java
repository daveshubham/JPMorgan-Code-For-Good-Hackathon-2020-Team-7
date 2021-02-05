import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.json.JSONObject;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.*;
import java.util.Map;
import java.util.Properties;

public class AddPointsLambda implements RequestHandler<Map<String,Object>, Object> {

    @Override
    public Object handleRequest(Map<String, Object> inputMap, Context context) {
        String propertiesJSONString = null;
        try {
            propertiesJSONString = Files.readString(Path.of(LeaderBoardLambda.class.getResource("dbProperties.json").getPath()));
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        JSONObject propertiesJSON = new JSONObject(propertiesJSONString);
        Properties dbProperties = new Properties();
        propertiesJSON.keys().forEachRemaining(key -> dbProperties.setProperty(key, propertiesJSON.get(key).toString()));
        String username = (String) inputMap.get("username");
        String scoreType = (String) inputMap.get("scoreType");
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(dbProperties.getProperty("url"), dbProperties);
            PreparedStatement existingScoreStatement = connection.prepareStatement("SELECT score FROM Scores WHERE username = ? AND scoreType = ?;");
            existingScoreStatement.setString(1, username);
            existingScoreStatement.setString(2, scoreType);
            ResultSet existingScoreRS = existingScoreStatement.executeQuery();
            Integer existingScore = 0;
            if (existingScoreRS.next()) {
                existingScore = existingScoreRS.getInt("score");
            }
            PreparedStatement clearExistingStatement = connection.prepareStatement("DELETE FROM Scores WHERE username = ? AND scoreType = ?;");
            clearExistingStatement.setString(1, username);
            clearExistingStatement.setString(2, scoreType);
            clearExistingStatement.executeUpdate();
            PreparedStatement insertNewCategoryScore = connection.prepareStatement("INSERT INTO Scores (username, score, scoreType) VALUES(?, ?, ?);");
            insertNewCategoryScore.setString(1, username);
            insertNewCategoryScore.setInt(2, existingScore + (Integer) inputMap.get("scoreChange"));
            insertNewCategoryScore.setString(3, scoreType);
            insertNewCategoryScore.executeUpdate();

        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (connection != null){
                try {
                    connection.close();
                } catch (SQLException throwables) {
                    throwables.printStackTrace();
                }
            }
        }
        return null;
    }
}
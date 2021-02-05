import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.json.JSONObject;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class LeaderBoardLambda implements RequestHandler<Map<String,Object>, Object> {

    public Object handleRequest(Map<String, Object> inputMap, Context unfilled) {
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
        Connection connection = null;
        HashMap<String, Integer> userScores = new HashMap<>();
        try {
            connection = DriverManager.getConnection(dbProperties.getProperty("url"), dbProperties);
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM Scores;");
            ResultSet allScores = statement.executeQuery();
            System.out.println(statement);
            int counter = 0;
            while (allScores.next()) {
                System.out.println(counter++);
                String username = allScores.getString("username");
                Integer score = allScores.getInt("score");
                userScores.put(username, score + userScores.getOrDefault(username, 0));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            return null;
        } finally {
            if (connection != null){
                try {
                    connection.close();
                } catch (SQLException throwables) {
                    throwables.printStackTrace();
                }
            }
        }
        LeaderBoard toReturn = new LeaderBoard();
        for (Map.Entry<String, Integer> entry : userScores.entrySet()) {
            toReturn.addEntry(new LeaderBoard.BoardEntry(entry.getKey(), entry.getValue()));
        }
        System.out.println(toReturn);
        toReturn.sortEntries();
        System.out.println(toReturn);
        return toReturn;
        }
}
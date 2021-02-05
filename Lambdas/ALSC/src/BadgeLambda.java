import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.json.JSONObject;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.*;
import java.util.ArrayList;
import java.util.Map;
import java.util.Properties;

public class BadgeLambda implements RequestHandler<Map<String,Object>, Object> {


    @Override
    public Object handleRequest(Map<String, Object> inputMap, Context context) {
        ArrayList<Badge> badges = new ArrayList<>();
        String propertiesJSONString = null;
        try {
            propertiesJSONString = Files.readString(Path.of(BadgeLambda.class.getResource("dbProperties.json").getPath()));
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        JSONObject propertiesJSON = new JSONObject(propertiesJSONString);
        Properties dbProperties = new Properties();
        propertiesJSON.keys().forEachRemaining(key -> dbProperties.setProperty(key, propertiesJSON.get(key).toString()));

        String badgesJSONString = null;
        try {
            propertiesJSONString = Files.readString(Path.of(BadgeLambda.class.getResource("badges.json").getPath()));
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        JSONObject badgesJSON = new JSONObject(propertiesJSONString);

        Connection connection = null;
        try {
            connection = DriverManager.getConnection(dbProperties.getProperty("url"), dbProperties);
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM Scores WHERE username = ?;");
            statement.setString(1, (String) inputMap.get("username"));
            ResultSet userScoreTypes = statement.executeQuery();
            while (userScoreTypes.next()) {
                String resultType = userScoreTypes.getString("scoreType");
                Integer score = userScoreTypes.getInt("score");
                for (Object badgeObject : badgesJSON.getJSONArray(resultType)) {
                    JSONObject badge = (JSONObject) badgeObject;
                    Integer badgeReq = badge.getInt("minScore");
                    if (score >= badgeReq) {
                        badges.add(new Badge(badge.getString("name"), badge.getString("url")));
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
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

        return badges;
    }
}
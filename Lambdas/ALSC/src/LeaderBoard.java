import java.util.ArrayList;

public class LeaderBoard {
    ArrayList entries;

    public ArrayList getEntries() {
        return entries;
    }

    @Override
    public String toString() {
        return "LeaderBoard{" +
                "entries=" + entries +
                '}';
    }

    public void setEntries(ArrayList entries) {
        this.entries = entries;
    }

    public LeaderBoard() {
        entries = new ArrayList();
    }

    public void addEntry(BoardEntry entry) {
        entries.add(entry);
    }

    public void sortEntries() {
        entries.sort(null);
    }


    public static class BoardEntry implements Comparable<BoardEntry> {
        String name;
        Integer score;

        @Override
        public String toString() {
            return "BoardEntry{" +
                    "name='" + name + '\'' +
                    ", score=" + score +
                    '}';
        }

        public BoardEntry(String name, Integer score){
            this.name = name;
            this.score = score;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getScore() {
            return score;
        }

        public void setScore(Integer score) {
            this.score = score;
        }

        @Override
        public int compareTo(BoardEntry o) {
            return o.score.compareTo(this.score);
        }
    }
}
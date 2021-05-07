package Model;

import java.io.IOException;

public interface LeagueManager {
    SportsClub addSportsClub(SportsClub club);
    void deleteSportsClub(int clubIdToDelete);
    void viewStats(int inputClubId);
    void leagueTable();
    public int compareTo(SportsClub club);
    void saveFile();
    void addPlayedMatch(String inputClubNameForStats,DateTime playedDate,int playedMatch);
    void saveData(String fileName) throws IOException;
    void retrieveData(String fileName) throws IOException, ClassNotFoundException;
    public FootballClub[] getNumberOfPoints(int numberOfPoints);
}

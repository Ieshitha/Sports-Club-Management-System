package Model;

public class SchoolFootballClub extends FootballClub {
    private String schoolName;


    public SchoolFootballClub(String clubName, String clubLocation, String clubType, int numberOfWins, int numberOfDraws, int numberOfDefeat,int playedMatch,int numberOfPoints, int numberOfGoals,String schoolName) {
        super(clubName,clubLocation,clubType,numberOfWins,numberOfDraws,numberOfDefeat,playedMatch,numberOfPoints,numberOfGoals);
        this.schoolName=schoolName;
    }

    public String getSchoolName(){

        return schoolName;
    }
    public void setSchoolName(String schoolName){

        this.schoolName=schoolName;
    }

    @Override
    public String toString() {
        return "SchoolFootballClub{" +
                "schoolName='" + schoolName + '\'' +
                '}';
    }
}

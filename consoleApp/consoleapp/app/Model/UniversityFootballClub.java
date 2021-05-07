package Model;

public class UniversityFootballClub extends FootballClub{
    private String universityName;


    public UniversityFootballClub(String clubName,String clubLocation,String clubType,int numberOfWins,int numberOfDraws,int numberOfDefeat,int playedMatch,int numberOfPoints,int numberOfGoals,String universityName){
        super(clubName,clubLocation,clubType,numberOfWins,numberOfDraws,numberOfDefeat,playedMatch,numberOfPoints,numberOfGoals);
        this.universityName=universityName;
    }

    public String getUniversityName(){

        return universityName;
    }
    public void setUniversityName(String universityName){

        this.universityName=universityName;
    }

    @Override
    public String toString() {
        return "UniversityFootballClub{" +
                "universityName='" + universityName + '\'' +
                '}';
    }
}

package Model;

public  class SportsClub implements java.io.Serializable, Comparable<SportsClub> {
    private int numberOfWins;
    private int numberOfDraws;
    private int numberOfDefeat;
    private String clubName;
    private String clubLocation;
    private String clubType;
    private DateTime date;
    private int playedMatch;
    private int id;

    public SportsClub(){}
    public SportsClub(String clubName, String clubLocation, String clubType, int numbersOfWins, int numberOfDraws, int numberOfDefeat, int playedMatch,int id){
        this.clubName=clubName;
        this.clubLocation=clubLocation;
        this.clubType=clubType;
        this.numberOfWins=numbersOfWins;
        this.numberOfDefeat=numberOfDefeat;
        this.numberOfDraws=numberOfDraws;
        this.playedMatch=playedMatch;
        this.id=id;
    }

    public SportsClub(String clubName, String clubLocation, String clubType, int numbersOfWins, int numberOfDraws, int numberOfDefeat, int playedMatch){
        this.clubName=clubName;
        this.clubLocation=clubLocation;
        this.clubType=clubType;
        this.numberOfWins=numbersOfWins;
        this.numberOfDefeat=numberOfDefeat;
        this.numberOfDraws=numberOfDraws;
        this.playedMatch=playedMatch;
    }

    public SportsClub(String clubName,String clubLocation,String clubType,int numbersOfWins,int numberOfDraws,int numberOfDefeat,int playedMatch,DateTime date){
        this.clubName=clubName;
        this.clubLocation=clubLocation;
        this.clubType=clubType;
        this.date=date;
        this.numberOfWins=numbersOfWins;
        this.numberOfDefeat=numberOfDefeat;
        this.numberOfDraws=numberOfDraws;
        this.playedMatch=playedMatch;
    }

    public String getClubName() {
        return clubName;
    }

    public void setClubName(String clubName) {

        this.clubName = clubName;
    }

    public String getClubLocation() {

        return clubLocation;
    }

    public void setClubLocation(String clubLocation) {

        this.clubLocation = clubLocation;
    }

    public String getClubType() {

        return clubType;
    }

    public void setClubType(String clubType) {

        this.clubType = clubType;
    }

    public int getNumberOfWins() {

        return numberOfWins;
    }

    public void setNumberOfWins(int numbersOfWins) {

        this.numberOfWins = numbersOfWins;
    }

    public int getNumberOfDraws() {

        return numberOfDraws;
    }

    public void setNumberOfDraws(int numberOfDraws) {

        this.numberOfDraws = numberOfDraws;
    }

    public int getNumberOfDefeat() {

        return numberOfDefeat;
    }

    public void setNumberOfDefeat(int numberOfDefeat) {

        this.numberOfDefeat = numberOfDefeat;
    }

    public int getPlayedMatch() {

        return playedMatch;
    }

    public void setPlayedMatch(int playedMatch) {

        this.playedMatch = playedMatch;
    }

    public DateTime getDate() {

        return date;
    }

    public void setDate(DateTime date) {

        this.date = date;
    }

    public int getId() {

        return id;
    }

    public void setId(int id) {

        this.id = id;
    }

    @Override
    public String toString() {
        return "SportsClub{" +
                "numberOfWins=" + numberOfWins +
                ", numberOfDraws=" + numberOfDraws +
                ", numberOfDefeat=" + numberOfDefeat +
                ", clubName='" + clubName + '\'' +
                ", clubLocation='" + clubLocation + '\'' +
                ", clubType='" + clubType + '\'' +
                ", date=" + date +
                ", playedMatch=" + playedMatch +
                '}';
    }

    @Override
    public int compareTo(SportsClub o) {
        System.out.println("Compare to "+o +"sdfs"+ this.getPlayedMatch());
        if (this.getPlayedMatch() > o.getPlayedMatch()){

            return 0;
        }
        else if(this.getNumberOfWins() > o.getNumberOfWins()){

            return 0;
        }

        else{

            return 1;
        }

    }
}

//         System.out.println("HOOOOT");
//         System.out.println("WIIIINNNS");
//         System.out.println("NO HORRRR");

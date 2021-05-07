package Model;

import java.util.Comparator;

public class FootballClub extends SportsClub {
    private int numberOfPoints;
    private int numberOfGoals;

    public FootballClub(String clubName, String clubLocation, String clubType, int numberOfWins, int numberOfDraws, int numberOfDefeat, int playedMatch, int numberOfPoints, int numberOfGoals) {
        super(clubName, clubLocation, clubType, numberOfWins, numberOfDraws, numberOfDefeat, playedMatch);
        this.numberOfGoals = numberOfGoals;
        this.numberOfPoints = numberOfPoints;
    }

    public FootballClub() {

    }

    public int getNumberOfGoals() {

        return numberOfGoals;
    }

    public void setNumberOfGoals(int numberOfGoals) {

        this.numberOfGoals = numberOfGoals;
    }

    public int getNumberOfPoints() {

        return numberOfPoints;
    }

    public void setNumberOfPoints(int numberOfPoints) {

        this.numberOfPoints = numberOfPoints;
    }

    @Override
    public String toString() {
        return "FootballClub{" +
                "numberOfPoints=" + numberOfPoints +
                ", numberOfGoals=" + numberOfGoals +
                '}';
    }
}

//    @Override
//    public int compare(SportsClub o1) {
//        int cmp = super.compareTo(o1);
//        // don't do this!
//        if (cmp == 0 && (o1 instanceof FootballClub)) {
//            FootballClub otherColor = (FootballClub) o1;
////            cmp = this.getNumberOfGoals().compareTo(otherColor.getNumberOfGoals());
//            if (this.getNumberOfGoals() > ((FootballClub) o1).getNumberOfGoals()) {
//                System.out.println("HOOOOT");
//                cmp=0;
//                return cmp;
//            }
//
//            else{
//                System.out.println("NO HORRRR");
//                cmp=1;
//                return cmp;
//            }
//
//        }
//        return cmp;

//    }
//    @Override
//    public int compareTo(FootballClub o) {
//        System.out.println("Compare to "+o +"sdfs"+ this.getNumberOfGoals());
//        if (this.getNumberOfGoals() > o.getNumberOfGoals()){
//            System.out.println("HOOOOT");
//            return 0;
//        }
//
//        else{
//            System.out.println("NO HORRRR");
//            return 1;
//        }
//
//    }




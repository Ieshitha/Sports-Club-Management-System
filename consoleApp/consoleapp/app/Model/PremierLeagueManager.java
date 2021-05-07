package Model;
import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class PremierLeagueManager implements LeagueManager {
    public static final List<SportsClub> allClubs = new ArrayList<>();
    public static int clubId=0;

  public List<SportsClub>  getAllClubs() {
       return allClubs;
    }

    public int clubId (SportsClub club){
        clubId = allClubs.size()+1;
        club.setId(clubId);
        return 0;
    }

    @Override
    public SportsClub addSportsClub(SportsClub club) {      //To add sports club to the premier league System
        System.out.println("PLAY_ ADDDDOMD");
        if (allClubs.size() < 100) {
            if (allClubs.size() == 0) {               // check if the array list is empty
                if (club instanceof FootballClub) {
                            clubId(club);
                            allClubs.add(club);
                            System.out.println("CLUB ID : " + clubId);
                            System.out.println("-------------------------------");
                            System.out.println("Sports club successfully added");
                            System.out.println("-------------------------------");
                            System.out.println(allClubs.get(0).getClubName());
                }
            } else {
                for (SportsClub club1 : allClubs) {
                    if (club.getClubName().equals(club1.getClubName())) {   // To avoid duplicate club names
                        System.out.println("Sports Club details already exist in the System ");
                        return club1;
                    } else {
                        clubId(club);
                        club.setId(clubId);
                        allClubs.add(club);
                        System.out.println("club was added to the array list!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                        System.out.println("CLUB ID : " + clubId);

                        System.out.println("-------------------------------");
                        System.out.println("Sports club successfully added");
                        System.out.println("-------------------------------");
                    }
                    break;
                }
            }
        } else {
            System.out.println("---------------------");    //if the number of clubs exceed 100, it will show
            System.out.println("NO SPACE AVAILABLE");
            System.out.println("---------------------\n");
        }
        return club;

    }

    @Override
    public void deleteSportsClub(int clubIdToDelete) {    //delete sports club
        boolean foundClub = false;
        if (allClubs.size() == 0) {                                 //if the club not in system
            System.out.println("----------------");
            System.out.println("Not Found");
            System.out.println("----------------");
        } else {
            for (SportsClub club : allClubs) {                  // check weather the club is on the array list called allClubs
                if (club.getId()==(clubIdToDelete)) {
                    foundClub = true;
                    allClubs.remove(club);
                    System.out.println(club.getId() + " club Id was deleted");
                    System.out.println(club.getClubName() + " was removed successfully ! \n");
                    break;
                }
                else{
                    if(club.getId()!=(clubIdToDelete))
                        System.out.println("----------------");
                    System.out.println("Not Found");
                    System.out.println("----------------");
                }
            }
        }
    }

    public void viewStats(int inputClubId) {            //view the statistics on the selected club
        boolean searchClub = false;
        if (allClubs.size() == 0) {
            System.out.println("----------------");
            System.out.println("Not Found");
            System.out.println("----------------");
        } else {
            for (SportsClub club : allClubs) {
                if (club.getId()==(inputClubId)) {
                    System.out.println("club" + club.getDate());
                    searchClub = true;
                    System.out.println("=================Club Statistics======================");
                    System.out.println("ClUB ID : "+ club.getId());
                    System.out.println("ClUB NAME : " + club.getClubName());
                    System.out.println("ClUB TYPE : " + club.getClubType());
                    System.out.println("ClUB LOCATION : " + club.getClubLocation());
                    System.out.println("WINS : " + club.getNumberOfWins());
                    System.out.println("DRAWS : " + club.getNumberOfDraws());
                    System.out.println("DEFEAT : " + club.getNumberOfDefeat());
                    System.out.println("LAST PLAYED MATCH SCORE : " + club.getPlayedMatch());
                    System.out.println("GOALS :"+ ((FootballClub)club).getNumberOfGoals());
                    if (club.getDate()!=null )
                        System.out.println("LAST PLAYED MATCH DATE : " + club.getDate());
                    else {
                        System.out.println("LAST PLAYED MATCH DATE : NOT UPDATE ");
                    }
                    System.out.println("=======================================================");
                }
                else {
                    if(club.getId()!=(inputClubId))
                        System.out.println("----------------");
                    System.out.println("Not Found");
                    System.out.println("----------------");
                }
            }
        }
    }

    public void addPlayedMatch(String inputClubNameForStats,DateTime playedDate,int playedMatch){
        boolean findClub=false;
        if(allClubs.size()==0) {
            System.out.println("-------------------");
            System.out.println("NOT FOUND");
            System.out.println("-------------------");
        }else {
            for (SportsClub club : allClubs){
                if (club.getClubName().equals(inputClubNameForStats));
                findClub=true;
                allClubs.add(club);
                club.setDate(playedDate);
                club.setPlayedMatch(playedMatch);
                System.out.println(club.getClubName()+" " + club.getPlayedMatch()+" " + club.getDate()+" "+" was added successfully ! \n");
                break;
            }
        }
    }
    public int compareTo(SportsClub club){
        int compareClub = ((FootballClub) club).getNumberOfPoints();
        return compareClub - ((FootballClub) club).getNumberOfPoints();

    }

    @Override
    public void leagueTable() {
        if (allClubs.size() == 0) {
            System.out.println("Online Premier League Table still Empty.Please add your team details");
            System.out.println("-----------------------------------------------------------------------\n");
        } else {
            System.out.format("%5s%15s%15s%10s%12s%15s%15s%12s%n","Club ID ", "Club Name", "Club Location", "Wins", "Draws", "Defeat", "Goals", "Points");   //table Format
            for (SportsClub club : allClubs) {
                if (club instanceof FootballClub) {
                   // System.out.println("FOOOOY " + club);
                    System.out.format("%5s%15s%15s%11d%12d%15d%15s%12s\n",club.getId(),club.getClubName(), club.getClubLocation(), club.getNumberOfWins(), club.getNumberOfDraws(), club.getNumberOfDefeat(), ((FootballClub) club).getNumberOfGoals(), ((FootballClub) club).getNumberOfPoints());
                }
            }
        }
        //System.out.println("reversed order!!!!");
        allClubs.sort(Comparator.comparingInt(s -> ((FootballClub) s).getNumberOfPoints()).reversed());
    }

    public void saveFile() {
        if (allClubs.size() != 0) {
            String FILE_EXTENSION = ".txt";
            DateFormat df = new SimpleDateFormat("yyyyMMddhhmmss");
            String filename = df.format(new Date()) + "." + FILE_EXTENSION;
            try
                    (FileWriter fw = new FileWriter(new File(filename), true)) {
                try
                        (PrintWriter pw = new PrintWriter(fw, true)) {

                    for (SportsClub club : allClubs) {
                        pw.println("Club Id : "+ club.getId()+" Club Name : " + club.getClubName() + " Club Location : " + club.getClubLocation() + " Club Type : " + club.getClubType() + " club win : " + club.getNumberOfWins() +" club defeat : "+club.getNumberOfDefeat()
                                +" club Draws : "+club.getNumberOfDraws() + " Played Date : " + club.getDate() + " Played Match Score : "+ club.getPlayedMatch());
                    }
                    System.out.println(" File Sucessfully Saved.");
                    System.out.println("---------------------------------------------\n");
                } catch (ArrayIndexOutOfBoundsException e) {
                    e.printStackTrace();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            System.out.println(" Empty List Nothing to save.");                        //when array list is empty console will print this message to the user
            System.out.println("-----------------------------------------------\n");
        }
    }

    public void saveData(String fileName) throws IOException {
        FileOutputStream file = new FileOutputStream((fileName));
        ObjectOutputStream clubOutputStream = new ObjectOutputStream(file);
        file.flush();
        for (SportsClub club : allClubs) {
            System.out.println(allClubs.size());
            clubOutputStream.writeObject(club);
            System.out.println("club was added to the file!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+ club.getClubName()+ club.getId());
            //break
            }
        System.out.println(" All clubs have been saved successfully");   // this will display when you exit the program that is has saved all the clubs the array.

  }
    public void retrieveData(String fileName) throws IOException, ClassNotFoundException {
        FileInputStream fileInputStream = new FileInputStream(new File("SportsClub.txt"));
        ObjectInputStream clubObjectInputStream = new ObjectInputStream(fileInputStream);
       for (; ; ) {

            try {
                    allClubs.add((SportsClub) clubObjectInputStream.readObject());
                    //clubObjectInputStream.readObject();
                    System.out.println("club was retrieve from the file!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

            } catch (EOFException e) {
                break;
            }
         }
        System.out.println("---------------------------------------------------------");
        System.out.println("All the clubs in the System have been loaded successfully");
        System.out.println("---------------------------------------------------------");
        System.out.println(" ");
    }

    public FootballClub[] getNumberOfPoints(int numberOfPoints){

        return new FootballClub[0];
    }
}

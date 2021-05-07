package Model;
import java.awt.*;
import java.io.IOException;
import java.net.URL;
import java.util.InputMismatchException;
import java.util.Scanner;

public class ConsoleApp {
    private static LeagueManager manager=new PremierLeagueManager();
    public static void addSportsClub() {
        Scanner userInput = new Scanner(System.in);
        SportsClub club;

        while (true) {
            System.out.print("Enter the Sports Club Name : ");    // get the user input for sports club name from the user
            String clubName = userInput.next();

            while (!clubName.matches("[a-zA-Z_]+")){           // validate the user input until the user input it correctly
                System.out.println("Invalid !! Please Enter again");
                System.out.print("Sports Club Name : ");
                clubName = userInput.next();
            }

            System.out.print("Enter the Sports Club Location : ");   // get the user input for club location from the user
            String clubLocation = userInput.next();

            while (!clubLocation.matches("[a-zA-Z_]+")) {     // validate the club location input until the user input it correctly
                System.out.println("Invalid !! Please Enter again");
                System.out.print("Sports Club Location : ");
                clubLocation = userInput.next();
            }

            System.out.println("Sports club type : (FB - Football Club, SFB - School Football Club, UFB - University Football Club)");
            String clubType = userInput.next();                     // get the user input for club type

            while (!clubType.matches("[a-zA-Z_]+")) {
                System.out.println("Invalid !! Please Enter again");  // validate the club type input until user input it correctly
                System.out.print("Sports Club Type : ");
                clubType = userInput.next();
            }
            int wins = 0;
            do {
                try{
                    System.out.print("Enter the Number of matches that your team won : ");
                     wins = userInput.nextInt();
                }catch (InputMismatchException e){
                    System.out.println("Invalid !! Please Enter again");;
                }
                userInput.nextLine();
            }while (wins<=0);

            int defeat = 0;
            do {
                try{
                    System.out.print("Enter the Number of matches that your team Defeat : ");
                     defeat = userInput.nextInt();
                }catch (InputMismatchException e){
                    System.out.println("Invalid !! Please Enter again");;
                }
                userInput.nextLine();
            }while (defeat<=0);

            int draws = 0;
            do {
                try{
                    System.out.print("Enter the Number of Matches that your team Draw : ");
                    draws = userInput.nextInt();
                }catch (InputMismatchException e){
                    System.out.println("Invalid !! Please Enter again");;
                }
                userInput.nextLine();
            }while (draws<=0);

            int playedMatch = 0;
            do {
                try{
                    System.out.print("Enter the number of matches that you have to play : ");
                    playedMatch = userInput.nextInt();
                }catch (InputMismatchException e){
                    System.out.println("Invalid !! Please Enter again");;
                }
                userInput.nextLine();
            }while (playedMatch<=0);

            int points = 0;
            do {
                try{
                    System.out.print("Enter the number of Points that your team gained : ");
                    points = userInput.nextInt();
                }catch (InputMismatchException e){
                    System.out.println("Invalid !! Please Enter again");;
                }
                userInput.nextLine();
            }while (points<=0);

            int goals = 0;
            do {
                try{
                    System.out.print("Enter the number of Goals : ");
                    goals = userInput.nextInt();
                }catch (InputMismatchException e){
                    System.out.println("Invalid !! Please Enter again");;
                }
                userInput.nextLine();
            }while (goals<=0);

            String schoolName = null;
            String universityName = null;

            switch (clubType) {
                case "FB":
                case "Fb":
                case "fB":
                case "fb":
                    club = new FootballClub(clubName, clubLocation,clubType,wins, draws, defeat,playedMatch,points,goals);
                    break;

                case "SFB":
                case "sfb":
                case "Sfb":
                case "SFb":
                case "sfB":
                case "SfB":
                case "sFb":
                    club = new SchoolFootballClub(clubName, clubLocation, clubType, wins, draws, defeat, playedMatch, points, goals, schoolName);
                    break;

                case "UFB":
                case "ufb":
                case "Ufb":
                case "UFb":
                case "ufB":
                case "uFB":
                    club = new UniversityFootballClub(clubName, clubLocation, clubType, wins, draws, defeat, playedMatch,points, goals, universityName);
                    break;

                default:
                    System.out.println("Invalid Input...");
                    continue;
            }
            System.out.println("CLUUUUUB"+club);
            manager.addSportsClub(club);
            try {
                manager.saveData("SportsClub.txt");
            } catch (IOException e) {
                e.printStackTrace();
            }
            break;
        }
    }

    public static void deleteSportsClub(){
        System.out.print("Please enter the Sports Club Id to remove : ");
        Scanner nameInput = new Scanner(System.in);
        int clubIdToDelete=nameInput.nextInt();
        manager.deleteSportsClub(clubIdToDelete);
    }

//        while (!clubNameToDelete.matches("[a-zA-Z_]+")){
//            System.out.println("Invalid !! Please Enter again");
//            System.out.print("Sports Club Name : ");
//            clubNameToDelete = nameInput.next();
//        }


    public static void viewStats(){
        System.out.print("Enter the Sports club ID to show their Statistics and Details : ");
        Scanner inputClub=new Scanner(System.in);
        int viewClubId=inputClub.nextInt();
        manager.viewStats(viewClubId);
    }

//        while (!viewClubName.matches("[a-zA-Z_]+")){
//            System.out.println("Invalid !! Please Enter again");
//            System.out.print("Sports Club Name : ");
//            viewClubName = inputClub.next();
//        }


    public static void playedMatch(){
        Scanner UseInput=new Scanner(System.in);
        System.out.print("Please enter the Sports Club Name to add the played Match : ");
        String addclubStats =UseInput.next();
//        while (!addclubStats.matches("[a-zA-Z_]" )){
//            System.out.println("Invalid !! Please Enter again");
//            System.out.print("Sports Club Name : ");
//            addclubStats = UseInput.next();
//        }

        int playedMatch = 0;
        do {
            try{
                System.out.print("Enter the score of the Match you Played : ");
                playedMatch=UseInput.nextInt();

            }catch (InputMismatchException e){
                System.out.println("Invalid !! Please Enter again");;
            }
            UseInput.nextLine();
        }while (playedMatch<=0);

        System.out.print("Enter the Date that the match held : ");
        String date=UseInput.next();

        String[] clubArray=date.split("/",5);
        DateTime clubDate=new DateTime(clubArray[0], clubArray[1], clubArray[2]);

        System.out.println("Date : " + clubDate);
        manager.addPlayedMatch(addclubStats,clubDate,playedMatch);
    }
    public static void openWebpage() {
        try {
            Desktop.getDesktop().browse(new URL("http://localhost:3000/").toURI());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args)throws IOException, ClassNotFoundException {
       manager.retrieveData("SportsClub.txt");
        menuLoop:   //menu loop
        while (true){
            System.out.println(" ");
            System.out.println("---------------------PREMIER LEAGUE----------------------");
            System.out.println("Press 1 to add the Sports Club");
            System.out.println("Press 2 to Delete the Sports Club");
            System.out.println("Press 3 to know the Statistics and details about the sports Club");
            System.out.println("Press 4 to display the League Table");
            System.out.println("Press 5 to Save Files ");
            System.out.println("Press 6 to add the Played matches");
            System.out.println("Press 7 to open web");
            System.out.println("Press 8 to Exit the System");
            System.out.println(" ");
            System.out.print("Please Enter : ");
            Scanner choice=new Scanner(System.in);
            int input=choice.nextInt();

            switch (input){
                case 1 :
                    addSportsClub();
                    break ;
                case 2 :
                    deleteSportsClub();
                    break ;
                case 3 :
                    viewStats();
                    break ;
                case 4 :
                    manager.leagueTable();

                    break ;
                case 5 :
                    manager.saveFile();
                    break ;
                case 6 :
                    playedMatch();
                    break ;
                case 7:
                    openWebpage();
                    break ;
                case 8 :
                    //manager.saveData("SportsClub.txt");
                    break menuLoop;

                default:
                    System.out.println(" ");
                    System.out.println("Invalid number!! Please enter a number between 1 to 7 ");
                    System.out.println(" ");
            }
        }
    }
}

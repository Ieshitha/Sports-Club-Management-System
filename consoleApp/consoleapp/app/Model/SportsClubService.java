package Model;
import java.io.IOException;
import java.util.*;

import static Model.PremierLeagueManager.allClubs;

public class SportsClubService {
    private Map<Integer, SportsClub> sportClubs = new HashMap<>();
    private static PremierLeagueManager manager=new PremierLeagueManager();
    List<SportsClub> sort = new ArrayList();



    public Optional<SportsClub> addSportClub(SportsClub sportsClub)throws IOException, ClassNotFoundException {
//       manager.retrieveData("SportsClub.txt");
        System.out.println(" CREATE_SERVICE "+ sportsClub);
       // manager.clubId(sportsClub);
        sportClubs.put(manager.clubId(sportsClub),sportsClub);
        manager.addSportsClub(sportsClub);
       // manager.getAllClubs().add(manager.clubId(sportsClub),sportsClub);

       // System.out.println(manager.getAllClubs());
        manager.saveData("SportsClub.txt");
       // System.out.println("club was added to the file!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        return Optional.ofNullable(sportsClub);

    }

    public Optional<SportsClub> getSportClub(int id) {

        return Optional.ofNullable(sportClubs.get(id));
    }

    public Set<SportsClub> getAllSportClubs() {
        System.out.println("GETALL" +manager.getAllClubs());
        HashMap<Integer, SportsClub> set = new HashMap<>();
        for(SportsClub club: manager.getAllClubs()){
            set.put(club.getId(), club);
        }
//        HashMap<, Integer> hashMap = new HashMap<>(
//                manager.getAllClubs().stream().collect(
//                        Collectors.toMap(Function.identity(), String::length))
//        );
//        return hashMap;
        return new HashSet<>(set.values());
    }

    public SportsClub updateSportClub(SportsClub sportsClub) {
        System.out.println("CREATE_SERVICE_UPDATE "+ sportsClub);
        int id = sportsClub.getId();
        for(SportsClub club : manager.getAllClubs()){
            if(club.getId()==id){
                club.setPlayedMatch(sportsClub.getPlayedMatch());
                club.setNumberOfWins(sportsClub.getNumberOfWins());
                club.setDate(sportsClub.getDate());
            }
        }
        return sportsClub;
//        sportsClubs.in
//        if (sportClubs.containsKey(id)){
//            System.out.println(sportClubs.containsKey(id));
//            sportClubs.put(id, sportsClub);
//            return Optional.ofNullable(sportsClub);
//        }
//        return Optional.ofNullable(sportsClub);
    }

    public boolean deleteSportClub(int id) {
        sportClubs.remove(id);
        return true;
    }

    public Map<String, Object> randomGenerator() {
        System.out.println("CREATE_SERVICE_RANDOM_GENERATOR ");

        int randomInt = (int)(Math.random() * ((manager.getAllClubs().size()-1) - 0 + 1) + 0);
        int randomIntTwo = (int)(Math.random() * ((manager.getAllClubs().size()-1) - 0 + 1) + 0);
        System.out.println("r1 "+ randomInt + " r2 "+ randomIntTwo);

        Map<String, Object> map = new HashMap<>();
        map.put("randomOne",randomInt);
        map.put("randomTwo", randomIntTwo);
        map.put("first", manager.getAllClubs().get(randomInt));
        map.put("second", manager.getAllClubs().get(randomIntTwo));
        return map;
    }


    public List<SportsClub> sortByMatch() {
        System.out.println("GONNA SORT" + manager.getAllClubs().get(0));
        Collections.sort(manager.getAllClubs(), Comparator.comparing(SportsClub::getPlayedMatch).reversed());
        Collections.sort(manager.getAllClubs());
//        HashMap<Integer, SportsClub> set = new HashMap<>();
        for(SportsClub club: manager.getAllClubs()){
            System.out.println("File " + club + club.getPlayedMatch());
//            set.put(club.getId(), club);
        }

       return manager.getAllClubs();
    }

    public ArrayList<FootballClub> sortByGoal() {
        ArrayList<FootballClub> footballClubs = new ArrayList();
        HashMap<Integer, FootballClub> set = new HashMap<>();
        for(SportsClub club: allClubs) {
            System.out.println("GOALS " + club);
            if (club instanceof FootballClub){
                System.out.println("YOOOO"+((FootballClub) club).getNumberOfGoals() + club.getClubName());
                footballClubs.add((FootballClub) club);
        }
//            set.put(club.getId(), club);
        }
        footballClubs.sort((a,b)->Integer.compare(b.getNumberOfGoals(),a.getNumberOfGoals()));
        for(FootballClub f: footballClubs) {
            System.out.println("BYGOALS"+ f + f.getId());
            set.put(f.getId(), f);
        }
        return footballClubs;
    }


    public List<SportsClub> sortByWins(){
        Collections.sort(manager.getAllClubs(), Comparator.comparing(SportsClub::getNumberOfWins).reversed());
        HashMap<Integer, SportsClub> set = new HashMap<>();
        for(SportsClub club: manager.getAllClubs()){
            System.out.println("WIOOF " + club);
            set.put(club.getId(), club);
        }
        return manager.getAllClubs();
    }

    public ArrayList<SportsClub> sortDate(String sportsClub) {
        System.out.println("sportsClub" + sportsClub);
        ArrayList<SportsClub> dateList = new ArrayList();
        for(SportsClub club : manager.getAllClubs()){
            System.out.println(club.getDate());
            if(club.getDate().toString().equals(sportsClub)){
                dateList.add(club);
            }
        }
        return dateList;
    }
}

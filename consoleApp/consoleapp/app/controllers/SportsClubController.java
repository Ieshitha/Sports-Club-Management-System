package controllers;
import Model.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import utils.ApplicationUtil;
import javax.inject.Inject;
import java.io.IOException;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.CompletionStage;
import static java.util.concurrent.CompletableFuture.supplyAsync;

public class SportsClubController extends Controller {
    private HttpExecutionContext ec;
    private SportsClubService sportsClubService;

    @Inject
    public SportsClubController(HttpExecutionContext ec, SportsClubService sportsClubService) {
        this.sportsClubService = sportsClubService;
        this.ec = ec;
    }

    public CompletionStage<Result> create(Http.Request request) {
        JsonNode json = request.body().asJson();
        System.out.println("CREATE"+ json);
        return supplyAsync(() -> {
            if (json == null) {
                return badRequest(ApplicationUtil.createResponse("Expecting Json data", false));
            }
            Optional<SportsClub> sportsClubOptional = null;
            SportsClub club;
            try {
                if(json.get("clubType").asText().equals("FB")){
                    System.out.println("json.get(\"clubType\")"+ json.get("clubType"));
                    sportsClubOptional = sportsClubService.addSportClub(Json.fromJson(json, FootballClub.class));
                }else   if(json.get("clubType").asText().equals("SFB")){
                    System.out.println("json.get(\"clubType\")"+ json.get("clubType"));
                    sportsClubOptional = sportsClubService.addSportClub(Json.fromJson(json, SchoolFootballClub.class));
                } else   if(json.get("clubType").asText().equals("UFB")){
                    System.out.println("json.get(\"clubType\")"+ json.get("clubType"));
                    sportsClubOptional = sportsClubService.addSportClub(Json.fromJson(json, UniversityFootballClub.class));
                }else{
                    System.out.println("Invalid");
                }
//                String s= String.valueOf(json.get("clubType"));
//                System.out.println("json.get(\"clubType\")"+ json.get("clubType").asText().equals("FB"));
//                sportsClubOptional = sportsClubService.addSportClub(Json.fromJson(json, FootballClub.class));
            } catch (IOException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            return sportsClubOptional.map(sportsClub -> {
                JsonNode jsonObject = Json.toJson(sportsClub);
                return created(ApplicationUtil.createResponse(jsonObject, true));
            }).orElse(internalServerError(ApplicationUtil.createResponse("Could not create data.", false)));
        }, ec.current());
    }

    public CompletionStage<Result> listSportsClub(){
        return supplyAsync(() -> {
            Set<SportsClub> result = sportsClubService.getAllSportClubs();
            ObjectMapper mapper = new ObjectMapper();
            JsonNode jsonData = mapper.convertValue(result, JsonNode.class);
            return ok(ApplicationUtil.createResponse(jsonData, true));
        }, ec.current());
    }

    public CompletionStage<Result> retrieve(int id) {
        return supplyAsync(() -> {
            final Optional<SportsClub> sportsClubOptional = sportsClubService.getSportClub(id);
            return sportsClubOptional.map(sportsClub -> {
                JsonNode jsonObjects = Json.toJson(sportsClub);
                return ok(ApplicationUtil.createResponse(jsonObjects, true));
            }).orElse(notFound(ApplicationUtil.createResponse("Student with id:" + id + " not found", false)));
        }, ec.current());
    }

    public CompletionStage<Result> update(Http.Request request) {
        JsonNode json = request.body().asJson();
        return supplyAsync(() -> {
            if (json == null) {
                return badRequest(ApplicationUtil.createResponse("Expecting Json data", false));
            }


            Optional<SportsClub> sportsClubOptional = Optional.ofNullable(sportsClubService.updateSportClub(Json.fromJson(json, SportsClub.class)));
            return sportsClubOptional.map(sportsClub -> {
                if (sportsClub == null) {
                    return notFound(ApplicationUtil.createResponse("Sports Club not found", false));
                }
                JsonNode jsonObject = Json.toJson(sportsClub);
                return ok(ApplicationUtil.createResponse(jsonObject, true));
            }).orElse(internalServerError(ApplicationUtil.createResponse("Could not create data.", false)));
        }, ec.current());
    }

    public CompletionStage<Result> delete(int id) {
        return supplyAsync(() -> {
            boolean status = sportsClubService.deleteSportClub(id);
            if (!status) {
                return notFound(ApplicationUtil.createResponse("Student with id:" + id + " not found", false));
            }
            return ok(ApplicationUtil.createResponse("Student with id:" + id + " deleted", true));
        }, ec.current());
    }

    public CompletionStage<Result> randomGenerator() {
        System.out.println("yoyoyoyoyo");
        return supplyAsync(() -> {
            return ok(ApplicationUtil.createResponse(sportsClubService.randomGenerator(), true));
        }, ec.current());
    }

    public CompletionStage<Result> sortByMatch() {
        System.out.println("Matchhhhhhhh");
        return supplyAsync(() -> {
            return ok(ApplicationUtil.createResponse(sportsClubService.sortByMatch(), true));
        }, ec.current());
    }

    public CompletionStage<Result> sortByGoal() {
        System.out.println("Goalsssssss");
        return supplyAsync(() -> {
            return ok(ApplicationUtil.createResponse(sportsClubService.sortByGoal(), true));
        }, ec.current());
    }

    public CompletionStage<Result> sortByWins() {
        System.out.println("Winsssssssss");
        return supplyAsync(() -> {
            return ok(ApplicationUtil.createResponse(sportsClubService.sortByWins(), true));
        }, ec.current());
    }
    public  CompletionStage<Result>  sortDate(Http.Request request){
        JsonNode json = request.body().asJson();
        System.out.println("CREATE"+ json);
        return supplyAsync(() -> {
            return ok(ApplicationUtil.createResponse(sportsClubService.sortDate(json.get("date").asText()),true));
        }, ec.current());
    }
   }


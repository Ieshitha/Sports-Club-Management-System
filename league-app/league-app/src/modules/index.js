import { Table } from "reactstrap";
import DashBoard from "./dashBoard/DashBoard";
import Delete from "./delete/Delete";
import Home from "./home/Home";
import LeagueTable from "./table/Table";
import Update from "./update/Update";

export default{
    HomeView: Home,
    DeleteView: Delete,
    UpdateView: Update,
    TableView: LeagueTable,
    DashBoardView: DashBoard,
}
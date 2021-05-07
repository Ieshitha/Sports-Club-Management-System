import React,{Component} from "react";
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Button,
    Input,
  } from "reactstrap";
  import Loading from './../../components/footer/Loading/Loading'


export default class LeagueTable extends Component{
  constructor(props) {
    super(props);
    this.state = {
      clubField: {},
      errors: {},
      loading: true

    }
  }

  componentDidMount(){
    fetch('list', {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({json: json, loading: false})
      })
      .catch(err => console.log(err))
  }

  sortPlayedMatches = () =>{
    this.setState({loading: true})
    fetch('sortByMatch', {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({json: json,  loading: false})
      })
      .catch(err => console.log(err))
  }
  sortGoals =()=>{
    this.setState({ loading: true})
    fetch('sortByGoal', {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({json: json, loading: false})
      })
      .catch(err => console.log(err))
  }
  sortWins =()=>{
    this.setState({ loading: true})
    fetch('sortByWins', {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({json: json, loading: false})
      })
      .catch(err => console.log(err))
  }
  onChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  getDateSort =()=>{
    this.setState({ loading: true})
    fetch('filterByDate', {
      method: "POST",
      body: JSON.stringify({date: `${this.state.day}/${this.state.month}/${this.state.year}`}),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({json: json, loading: false})
      })
      .catch(err => console.log(err))
  }
    render(){
      const {json ,loading}=this.state
      console.log(this.state)
        return(
            <div className="content">
            <>
              <>
              {(loading) && <Loading />}
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">League Champions Table</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                        <tr>
                          <th> Club ID</th>
                          <th>Club Name</th>
                          <th>Number Of Wins</th>
                          <th>Number Of Draws</th>
                          <th>Number Of Defeats</th>
                          <th>Number Of Goals</th>
                          <th>Played Matches</th>
                          <th>Number Of Score</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {json && json.body && Array.isArray(json.body) && json.body.map(v=> { return <tr>
                          <td>{v.id}</td>
                          <td>{v.clubName}</td>
                          <td>{v.numberOfWins}</td>
                          <td>{v.numberOfDraws}</td>
                          <td>{v.numberOfDefeat}</td>
                          <td>{v.numberOfGoals}</td>
                          <td>{v.playedMatch}</td>
                          <td>{v.numberOfPoints}</td>
                          <td>{v.date && `${v.date.day}/${v.date.month}/${v.date.year}`}</td>
                        </tr>})}


                      </tbody>
  
                    </Table>
                    {json && json.body && Array.isArray(json.body) &&  json.body.length==0 &&<span style={{display:'flex',justifyContent:'center'}}>No Records Found</span>}
                  </CardBody>
                </Card>
              </>
            </>
  
            <div style={{display:'flex',margin:'15px'}}>
              <div className="">
                <Button
                  className="btn-round"
                  color="primary"
                  type="submit"
                  onClick={this.sortPlayedMatches}
                >
                  Sort By Played Matches
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                <Button
                  className="btn-round"
                  color="primary"
                  type="submit"
                  onClick={this.sortGoals}
                >
                  Sort by Goals
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                <Button
                  className="btn-round"
                  color="primary"
                  type="submit"
                  onClick={this.sortWins}>
                  Sort by Wins
                </Button>
              </div>
              <div className="update ml-auto mr-auto">
                
              <label>Enter Date : </label>
                      <Input
                        //defaultValue="London"
                        placeholder="Day"
                        type="text"
                        name="day"
                        ref="day"
                        size="5"
                        onChange={this.onChange}
                      />
                       <Input
                        //defaultValue="London"
                        placeholder="Month"
                        type="text"
                        name="month"
                        ref="month"
                        size="5"
                        onChange={this.onChange}
                      />
                       <Input
                        //defaultValue="London"
                        placeholder="Year"
                        type="text"
                        name="year"
                        ref="year"
                        size="5"
                        onChange={this.onChange}
                      />
                <Button
                  className="btn-round"
                  color="primary"
                  onClick={this.getDateSort}
                  type="submit" disabled={!this.state.day || !this.state.month || !this.state.year}>
                  Sort by Date
                </Button>
              </div>
            
            </div>
  
          </div>
        )
    }
}
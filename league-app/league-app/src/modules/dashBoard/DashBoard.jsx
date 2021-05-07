import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
} from "reactstrap";
import Loading from './../../components/footer/Loading/Loading'

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubField: {},
      errors: {},
      loading: false

    }
  }

  buttonClick = (e) => {
    console.log("BUTTON CLICKED!!!!!", this.state);
    console.log(e.target);
    this.setState({
      loading: true
    })

    fetch('random', {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ json: json, loading: false })
      })
      .catch(err => console.log(err))

  }
  render() {
    const { json, loading } = this.state
    let validJson = json && json.body
    return (
      <div>
        {(loading) && <Loading />}
        <Row>
          <div className="update ml-auto mr-auto" style={{ marginTop: '10px' }}>
            <Button
              className="btn-round"
              color="primary"
              onClick={this.buttonClick}
            >
              Generate Random Club
                </Button>
          </div>
        </Row>
        <Row className="content-div" style={{ padding: "20px" }}>

          <Col lg="3" md="6" sm="6" >
            <Card className="card-stats">
              <CardBody>
                <>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Club Name {validJson && validJson.first && validJson.first.clubName}</p>
                      <CardTitle tag="p">Score {validJson && validJson.first && validJson.first.numberOfPoints}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Random Number One {validJson && validJson.randomOne + 1}
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                {/* <Row> */}
                <Col md="4" xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-money-coins text-success" />
                  </div>
                </Col>
                <Col md="8" xs="7">
                  <div className="numbers">
                    <p className="card-category">Club Name {validJson && validJson.second && validJson.second.clubName}</p>
                    <CardTitle tag="p">Score {validJson && validJson.second && validJson.second.numberOfPoints}</CardTitle>
                    <p />
                  </div>
                </Col>
                {/* </Row> */}
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Random Number Two {validJson && validJson.randomTwo + 1}
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </div>

    )
  }
}
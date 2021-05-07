import React, { Component } from "react";
import DeleteClub from "../delete/Delete";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  CardTitle,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import Loading from './../../components/footer/Loading/Loading'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubField: {},
      errors: {},
      loading: false

    }
  }


  onChange = (e) => {
    console.log("e.target", e.target.name, e.target.value)
    //   {
    //     "numberOfWins": 4,
    //     "numberOfDraws": 3,
    //     "numberOfDefeat": 1,
    //     "clubName": "JINALI",
    //     "clubLocation": "jinalasssfssdmsa",
    //     "clubType": "FB",
    //     "date": {"day": "12", "month": "12", "year": "12"},
    //     "playedMatch": 11,
    //     "id": 1
    // }
    // this.state={
    //   clubName:'',
    //         clubLocation:'',
    //         clubType:'',
    //         numberOfWins:'',
    //         numberOfDraws:'',
    //         numberOfDefeats:'',
    //         numberOfPoints:'',
    //         numberOfGoals:'',      
    // }



    this.setState({

      clubField: {},
      errors: {}

    });
  }

  handleValidation() {
    let clubField = this.state.clubField;
    let errors = {};
    let formIsValid = true;

    if (!clubField["clubName"]) {
      formIsValid = false;
      errors["clubName"] = "Empty!!!";
    }

    if (typeof clubField["clubName"] !== "undefined") {
      if (!clubField["clubName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["clubName"] = "Only letters";
      }
    }

    if (!clubField["clubLocation"]) {
      formIsValid = false;
      errors["clubLocation"] = "Empty!!!";
    }

    if (typeof clubField["clubLocation"] !== "undefined") {
      if (!clubField["clubLocation"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["clubLocation"] = "Only letters";
      }
    }

    if (!clubField["clubType"]) {
      formIsValid = false;
      errors["clubType"] = "Empty!!!";
    }

    if (typeof clubField["clubType"] !== "undefined") {
      if (!clubField["clubType"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["clubType"] = "Only letters";
      }
    }


    if (!clubField["numberOfWins"]) {
      formIsValid = false;
      errors["numberOfWins"] = "Empty!!!";
    }

    if (typeof clubField["numberOfWins"] !== "undefined") {
      if (clubField["numberOfWins"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["numberOfWins"] = "Only numbers";
      }
    }

    if (!clubField["numberOfDraws"]) {
      formIsValid = false;
      errors["numberOfDraws"] = "Empty!!!";
    }

    if (typeof clubField["numberOfDraws"] !== "undefined") {
      if (clubField["numberOfDraws"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["numberOfDraws"] = "Only numbers";
      }
    }


    if (!clubField["numberOfDefeat"]) {
      formIsValid = false;
      errors["numberOfDefeat"] = "Empty!!!";
    }

    if (typeof clubField["numberOfDefeat"] !== "undefined") {
      if (clubField["numberOfDefeat"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["numberOfDefeat"] = "Only numbers";
      }
    }

    if (!clubField["playedMatch"]) {
      formIsValid = false;
      errors["playedMatch"] = "Empty!!!";
    }

    if (typeof clubField["playedMatch"] !== "undefined") {
      if (clubField["playedMatch"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["playedMatch"] = "Only numbers";
      }
    }

    if (!clubField["numberOfScore"]) {
      formIsValid = false;
      errors["numberOfScore"] = "Empty!!!";
    }

    if (typeof clubField["numberOfScore"] !== "undefined") {
      if (clubField["numberOfScore"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["numberOfScore"] = "Only numbers";
      }
    }

    if (!clubField["year"]) {
      formIsValid = false;
      errors["year"] = "Empty!!!";
    }

    if (typeof clubField["year"] !== "undefined") {
      if (clubField["year"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["year"] = "Only numbers";
      }
    }

    if (!clubField["month"]) {
      formIsValid = false;
      errors["month"] = "Empty!!!";
    }

    if (typeof clubField["month"] !== "undefined") {
      if (clubField["month"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["month"] = "Only numbers";
      }
    }

    if (!clubField["day"]) {
      formIsValid = false;
      errors["day"] = "Empty!!!";
    }

    if (typeof clubField["day"] !== "undefined") {
      if (clubField["day"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["day"] = "Only numbers";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let clubField = this.state.clubField;
    clubField[field] = e.target.value;
    this.setState({ clubField, [e.target.name]: e.target.value });
  }
  buttonClick = (e) => {
    console.log("BUTTON CLICKED!!!!!", this.state);
    console.log(this.state);
    console.log(e.target.errors);

    if (this.handleValidation()) {
      this.setState({
        loading: true
      })
      let obj = {
        numberOfWins: this.state.numberOfWins,
        numberOfDraws: this.state.numberOfDraws,
        numberOfDefeat: this.state.numberOfDefeat,
        numberOfGoals: this.state.numberOfGoals,
        clubName: this.state.clubName,
        clubLocation: this.state.clubLocation,
        clubType: this.state.clubType,
        date: { day: this.state.day, month: this.state.month, year: this.state.year },
        playedMatch: this.state.playedMatch,
        numberOfPoints: this.state.numberOfScore,

      }
      alert("Form Submitted!!!")
      fetch('create', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then(response => response.json())
        .then(json => {
          this.setState({ json: json })
        })
        .catch(err => console.log(err))

      this.setState({
        loading: false,
        modal: true
      })
    } else {
      alert("Form has Error!!!!");
    }

  }
  onClose = () => {
    this.setState({
      modal: false,
      club: {}
    })
  }

  render() {
    const { loading, modal, json } = this.state
    console.log(this.state);
    return (
      <div>
        <Col md="8" className="content-div">
          {(loading) && <Loading />}
          <Card className="card-user" style={{ marginTop: '10px' }}>
            <CardHeader>
              <CardTitle tag="h5">Add Sports Club Profile</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                {/* <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Club Id </label>
                      <Input
                        placeholder="Club Id"
                        type="text"
                        name="id"
                      />
                    </FormGroup>
                  </Col>
                </Row> */}
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Sports Club Name </label>
                      <span style={{ color: "red" }}>{this.state.errors["clubName"]}</span>
                      <Input
                        //defaultValue="Gladius Twenty"
                        placeholder="Name"
                        name="clubName"
                        type="text"
                        ref="clubName"
                        size="25"
                        value={this.state.clubField["clubName"]}
                        onChange={this.handleChange.bind(this, "clubName")}
                      //value={this.state.clubName}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="3">
                    <FormGroup>
                      <label>Location </label>
                      <span style={{ color: "red" }}>{this.state.errors["clubLocation"]}</span>
                      <Input
                        //defaultValue="London"
                        placeholder="Location"
                        type="text"
                        name="clubLocation"
                        ref="clubLocation"
                        size="25"
                        value={this.state.clubField["clubLocation"]}
                        onChange={this.handleChange.bind(this, "clubLocation")}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label>
                        Club Type
                      </label>
                      <select placeholder="Select" name="clubType" ref="clubType" value={this.state.clubField["clubType"]}
                        onChange={this.handleChange.bind(this, "clubType")} style={{ padding: '5px', border: '1px solid #ced4da', color: '#495057' }}>
                        <option value={false} defaultValue>Select</option>
                        <option value="FB">Football Club</option>
                        <option value="SFB">School Football Club</option>
                        <option value="UFB">University Football Club</option>
                      </select>
                      {/* <Input placeholder="FB" name="clubType" type="text" ref="clubType"
                        size="25" value={this.state.clubField["clubType"]}
                        onChange={this.handleChange.bind(this, "clubType")} /> */}
                      <span style={{ color: "red" }}>{this.state.errors["clubType"]}</span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Wins </label>
                      <Input
                        name="numberOfWins"
                        placeholder="Wins"
                        type="text"
                        ref="numberOfWins"
                        size="25"
                        value={this.state.clubField["numberOfWins"]}
                        onChange={this.handleChange.bind(this, "numberOfWins")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["numberOfWins"]}</span>
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Draws </label>
                      <Input
                        name="numberOfDraws"
                        placeholder="Draws"
                        type="text"
                        ref="numberOfDraws"
                        size="25"
                        value={this.state.clubField["numberOfDraws"]}
                        onChange={this.handleChange.bind(this, "numberOfDraws")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["numberOfDraws"]}</span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Defeats </label>
                      <Input
                        name="numberOfDefeat"
                        placeholder="Defeats"
                        type="text"
                        ref="numberOfDefeat"
                        size="25"
                        value={this.state.clubField["numberOfDefeat"]}
                        onChange={this.handleChange.bind(this, "numberOfDefeat")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["numberOfDefeat"]}</span>
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Goals </label>
                      <Input
                        //defaultValue="1"
                        placeholder="Goals"
                        type="text"
                        name="numberOfGoals"
                        ref="numberOfGoals"
                        size="25"
                        value={this.state.clubField["numberOfGoals"]}
                        onChange={this.handleChange.bind(this, "numberOfGoals")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["numberOfGoals"]}</span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <label>Played Matches </label>
                      <Input
                        name=""
                        //defaultValue="2"
                        placeholder="Matches"
                        name="playedMatch"
                        type="text"
                        ref="playedMatch"
                        size="25"
                        value={this.state.clubField["playedMatch"]}
                        onChange={this.handleChange.bind(this, "playedMatch")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["playedMatch"]}</span>
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="6">
                    <FormGroup>
                      <label>Score </label>
                      <Input
                        //defaultValue="10"
                        placeholder="Score"
                        name="numberOfScore"
                        type="text"
                        ref="numberOfScore"
                        size="25"
                        value={this.state.clubField["numberOfScore"]}
                        onChange={this.handleChange.bind(this, "numberOfScore")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["numberOfScore"]}</span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Year </label>
                      <Input
                        //defaultValue="12"
                        placeholder="Year"
                        type="text"
                        name="year"
                        ref="clubName"
                        size="25"
                        value={this.state.clubField["year"]}
                        onChange={this.handleChange.bind(this, "year")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["year"]}</span>

                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="4">
                    <FormGroup>
                      <label>Month </label>
                      <Input
                        //defaultValue="10"
                        placeholder="Month"
                        type="text"
                        name="month"
                        ref="month"
                        size="25"
                        value={this.state.clubField["month"]}
                        onChange={this.handleChange.bind(this, "month")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["month"]}</span>
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label>Day </label>
                      <Input
                        // defaultValue="13"
                        placeholder="Day"
                        type="text"
                        name="day"
                        ref="day"
                        size="25"
                        value={this.state.clubField["day"]}
                        onChange={this.handleChange.bind(this, "day")}
                      />
                      <span style={{ color: "red" }}>{this.state.errors["day"]}</span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button
                      className="btn-round"
                      color="primary"
                      onClick={this.buttonClick}
                    >
                      Add Sports Club Profile
          </Button>
                  </div>
                </Row>
              </Form>
              <Modal isOpen={modal} toggle={modal}>
                <ModalHeader toggle={modal}>Sports club successfully added.</ModalHeader>
                <ModalBody>
                  {`Your club id is ${json && json.body && json.body.id}`}
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.onClose}>OK</Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Col>
      </div>
    )
  }


}
export default Home;
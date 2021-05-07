import React, { Component } from "react";
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

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubField: {},
      errors: {}

    }
  }

  onChange = (e) => {
    console.log("e.target", e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
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
    if (!clubField["id"]) {
      formIsValid = false;
      errors["id"] = "Empty!!!";
    }

    if (typeof clubField["id"] !== "undefined") {
      if (clubField["id"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["id"] = "Only numbers";
      }
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
    this.setState({ clubField });
  }

  buttonClick = (e) => {
    console.log("BUTTON CLICKED!!!!!", this.state);
    console.log(e.target);

    if (this.handleValidation()) {
      this.setState({
        loading: true
      })
      let obj = {
        numberOfWins: parseInt(this.state.clubField.numberOfWins),
        numberOfDraws: parseInt(this.state.clubField.numberOfDraws),
        numberOfDefeat: parseInt(this.state.clubField.numberOfDefeat),
        clubName: this.state.clubName,
        clubLocation: this.state.clubLocation,
        clubType: this.state.clubType,
        date: { day: parseInt(this.state.clubField.day), month: parseInt(this.state.clubField.month), year: (this.state.clubField.year) },
        numberOfPoints: parseInt(this.state.clubField.numberOfScore),
        playedMatch: parseInt(this.state.clubField.playedMatch),
        numberOfPoints: parseInt(this.state.clubField.numberOfScore),
        id: this.state.id,
        //no need id!!!

      }
      alert("Form Submitted!!!");
      fetch('update', {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        // .then(response => response.json())
        // .then(json => console.log(json))
        // .catch(err => console.log(err))
        .then(response => response.json())
        .then(json => {
          this.setState({
            json: json, loading: false,
            modal: true
          })
        })
        .catch(err => console.log(err))

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
    // const { loading } = this.state
    return (
      <Col md="8" className="content-div">
        {(loading) && <Loading />}
        <Card className="card-user" style={{ marginTop: '10px' }}>
          <CardHeader>
            <CardTitle tag="h5">Update Sports Club Profile</CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>Club Id </label>
                    <span style={{ color: "red" }}>{this.state.errors["id"]}</span>
                    <Input
                      // defaultValue="2"
                      placeholder="Club Id"
                      type="text"
                      value={this.state.clubField["id"]}
                      onChange={this.handleChange.bind(this, "id")}
                      name="id"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="5">
                  <FormGroup>
                    <label>Sports Club Name</label>
                    <span style={{ color: "red" }}>{this.state.errors["clubName"]}</span>
                    <Input
                      // defaultValue="Gladius Twenty"
                      placeholder="Name"
                      type="text"
                      ref="clubName"
                      size="25"
                      value={this.state.clubField["clubName"]}
                      onChange={this.handleChange.bind(this, "clubName")}
                      name="clubName"
                    />
                  </FormGroup>
                </Col>


              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <FormGroup>
                    <label>Played Matches</label>
                    <span style={{ color: "red" }}>{this.state.errors["playedMatch"]}</span>
                    <Input
                      // defaultValue="2"
                      placeholder="Matches"
                      type="text"
                      ref="playedMatch"
                      size="25"
                      value={this.state.clubField["playedMatch"]}
                      onChange={this.handleChange.bind(this, "playedMatch")}
                      name="playedMatch"
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="6">
                  <FormGroup>
                    <label>Score</label>
                    <span style={{ color: "red" }}>{this.state.errors["numberOfScore"]}</span>
                    <Input
                      // defaultValue="10"
                      placeholder="Score"
                      type="text"
                      ref="numberOfScore"
                      size="25"
                      value={this.state.clubField["numberOfScore"]}
                      onChange={this.handleChange.bind(this, "numberOfScore")}
                      name="numberOfScore"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="4">
                  <FormGroup>
                    <label>Year</label>
                    <span style={{ color: "red" }}>{this.state.errors["year"]}</span>
                    <Input
                      // defaultValue="12"
                      placeholder="Year"
                      type="text"
                      ref="clubName"
                      size="25"
                      value={this.state.clubField["year"]}
                      onChange={this.handleChange.bind(this, "year")}
                      name="Year"
                    />

                  </FormGroup>
                </Col>
                <Col className="px-1" md="4">
                  <FormGroup>
                    <label>Month</label>
                    <span style={{ color: "red" }}>{this.state.errors["month"]}</span>
                    <Input
                      // defaultValue="10"
                      placeholder="Month"
                      type="text"
                      ref="month"
                      size="25"
                      value={this.state.clubField["month"]}
                      onChange={this.handleChange.bind(this, "month")}
                      name="Month"
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-1" md="4">
                  <FormGroup>
                    <label>Day</label>
                    <span style={{ color: "red" }}>{this.state.errors["day"]}</span>
                    <Input
                      // defaultValue="13"
                      placeholder="Day"
                      type="text"
                      ref="day"
                      size="25"
                      value={this.state.clubField["day"]}
                      onChange={this.handleChange.bind(this, "day")}
                      name="Day"
                    />
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
                    Update Sports Club Profile
                </Button>
                </div>
              </Row>
            </Form>
            < Modal isOpen={modal} toggle={modal}>
              <ModalHeader toggle={modal}>Sports club successfully Edited.</ModalHeader>
              <ModalBody>
                {`Your club id is ${json && json.body && json.body.id} edited.`}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.onClose}>OK</Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
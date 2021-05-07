import React,{Component} from "react";
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
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from "reactstrap";
  import Loading from './../../components/footer/Loading/Loading'

 

export default class Delete extends Component{
  constructor(props) {
    super(props);
    this.state = {
      clubField: {},
      errors: {}
     
    }
  }

  onChange= (e) => {
    console.log("e.target", e.target.name, e.target.value)
  this.setState ({
    [e.target.name] : e.target.value,
    clubField: {},
    errors: {}
   });
  }
  handleValidation(){
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


    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field,e){
    let clubField=this.state.clubField;
    clubField[field]=e.target.value;
    this.setState({clubField});
  }

   buttonClick =(e) =>{
    console.log("BUTTON CLICKED!!!!!", this.state);
    console.log(e.target);

    if (this.handleValidation()){
      this.setState({
        loading: true
      })
      let obj ={
        numberOfWins: this.state.numberOfWins,
        numberOfDraws: this.state.numberOfDraws,
        numberOfDefeat: this.state.numberOfDefeat,
        clubName: this.state.clubName,
        clubLocation:this.state.clubLocation,
        clubType: this.state.clubType,
        date: {day:this.state.day, month: this.state.month, year: this.state.year},
        playedMatch:this.state.playedMatch,
        numberOfScore: this.state.numberOfScore,
        id: this.state.id,
        //no need id!!!

      }
      alert("Form Submitted!!!");
      fetch(this.state.clubField.id, {
        method: "DELETE",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then(response => response.json())
        .then(json => {
          this.setState({json: json})
        })
        .catch(err => console.log(err))
        this.setState({
          loading: false,
          modal: true
        })
    }else{
      alert("Form has Error!!!!");
    }
   }
   onClose =()=>{
    this.setState({
      modal: false,
      club:{}
    })
  }
    render(){
      const { loading, modal, json } = this.state
    console.log(this.state);
        return(
            <Col md="8" className="content-div">
               {(loading) && <Loading />}
          <Card className="card-user" style={{marginTop:'10px'}}>
            <CardHeader>
              <CardTitle tag="h5">Delete Sports Club</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <FormGroup row>
                  <Col>
                    <Label for="clubId">Club Id</Label>
                    <span style={{ color: "red" }}>{this.state.errors["id"]}</span>
                    <Col sm={10}>
                      <Input type="deleteClubId" name="deleteClubId" id="deleteClubId" placeholder="ID"   ref="id"
                        size="25"
                        value={this.state.clubField["id"]}
                        onChange={this.handleChange.bind(this,"id")}/>
                    </Col>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="ClubName">Club Name</Label>
                    <span style={{ color: "red" }}>{this.state.errors["clubName"]}</span>
                    <Col sm={10}>
                      <Input type="ClubName" name="clubName" id="ClubName" placeholder="Club Name"  ref="clubName"
                        size="25"
                        value={this.state.clubField["clubName"]}
                        onChange={this.handleChange.bind(this,"clubName")} />
                    </Col>
                  </FormGroup>

                  <div className="update ml-auto mr-auto" style={{marginTop:'30px'}}>
                    <Button
                      className="btn-round"
                      color="primary"
                      onClick={this.buttonClick}
                    >
                      Delete Sports Club Profile
            </Button>
                  </div>
                </Row>
              </Form>
             < Modal isOpen={modal} toggle={modal}>
                <ModalHeader toggle={modal}>Sports club successfully deleted.</ModalHeader>
                <ModalBody>
    {`Success`}
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
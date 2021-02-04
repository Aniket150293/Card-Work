import './App.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ArrowRight, CaretDown, ExclamationCircleFill, FileBreak, Printer } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <Row>
      <Col lg={4}></Col> 
      <Col lg={8}> 
      <Card className="App-card">
      <Card.Header>
          <Row>
            <Col lg={7}>
              <div className="App-header">Cancel / recall payment, GBP 1,000.00 </div>
              <div className="App-subheader">1234567890123456 (GB), KUIML Business Company </div>
            </Col>
            <Col lg={5}>
              <div className="App-upper">
                <FileBreak style={{ marginRight:20}} size={18}/>
                <span className= "App-border"></span>
                <Printer size={18} style={{marginLeft:20}} /> 
                <Button style={{marginLeft:20 }} variant="outline-secondary">Reject</Button>
                <Button style={{marginLeft:10}} variant="secondary">Authorize</Button>
              </div>
            </Col>
          </Row>
      </Card.Header>
      <Card.Body className="App-cardbody">
        <Row lg={9} className="App-row">
          <Col lg={3}>
          <Card.Text className="App-border">
            <div className="App-upperText">
             Request Reference
            </div>
            <div className="App-belowText">
             SET123456BCH 
            </div>
          </Card.Text>
          </Col>
          <Col lg={3} >
            <Card.Text className="App-border">
              <div className="App-upperText">
                Category
              </div>
              <div className="App-belowText">
                Payment 
              </div>
            </Card.Text>
          </Col>
          <Col lg={3}>
            <Card.Text className="App-border">
              <div className="App-upperText">
                Request Status
              </div>
              <div className="App-belowText">
                <ExclamationCircleFill color="yellow" size={15}/> Pending 
              </div>
            </Card.Text>
          </Col>
          <span className="App-fulldetails" ><a href="#">Full Details <CaretDown/></a></span>
        </Row>
      </Card.Body>
    </Card>
      </Col>
      </Row>
    </div>
  );
}

export default App;

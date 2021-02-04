import './App.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ArrowRight, CaretDown, ExclamationCircleFill, FileBreak, Printer } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
     <Card className="text-center">
      <Card.Header>
          <Row>
            <Col lg={8}>
              <div className="App-header">Cancel / recall payment, GBP 1,000.00 </div>
              <div className="App-subheader">1234567890123456 (GB), KUIML Business Company </div>
            </Col>
            <Col lg={4}>
              <div className="">
                <Printer size={20} style={{marginRight:10}}/> | 
                <FileBreak style={{marginLeft:10}} size={20}/>
                <Button style={{marginLeft:50}} variant="outline-primary">Reject</Button>
                <Button style={{marginLeft:10}} variant="primary">Authorize</Button>
              </div>
            </Col>
          </Row>
      </Card.Header>
      <Card.Body>
        <Row lg={8}>
          <Col lg={2}>
          <Card.Text>
            <div style={{color: 'gray'}}>
             Request Reference
            </div>
            <div>
             SET123456BCH 
            </div>
          </Card.Text>
          </Col>
          <Col lg={1}> <div> | </div>  <div> | </div> </Col>
          <Col lg={2}>
            <Card.Text>
              <div style={{color: 'gray'}}>
                Category
              </div>
              <div>
                Payment 
              </div>
            </Card.Text>
          </Col>
          <Col lg={1}> <div> | </div>  <div> | </div> </Col>
          <Col lg={2}>
            <Card.Text>
              <div style={{color: 'gray'}}>
                Request Status
              </div>
              <div>
                <ExclamationCircleFill color="yellow"/> Pending 
              </div>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer >
        <div style={{textAlign:'right'}}><a href="#">View Details <CaretDown/></a></div>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default App;

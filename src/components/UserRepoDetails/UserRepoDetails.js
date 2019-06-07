import React, { Component } from 'react';
import {Container,Row,Col,Card,Button, Spinner} from 'react-bootstrap';

class UserRepoDetails extends Component {
  
  getUserRepoDetails = (repos) => {
    return repos.map(({id, name, language }) => (
        <Container>
          <Row key={id} style={{"paddingTop":"10px"}}>
            <Col lg={6} style={{"float":"left"}}>
                {name}
            </Col>
            <Col lg={6} style={{"float":"left"}}>
                {language}
            </Col>
          </Row>
      </Container>
    ))
  }

  getBasicDetails = () =>  {

      const { userData : { avatar_url, html_url, login}, userRepoDetails } = this.props;
      return (
        
        <Row>
          <Col lg={2}>
            <img src={avatar_url} alt={avatar_url} width="100px" height="100px" style={{"borderRadius":"50%"}}/>
          </Col>
          <Col lg={8}>
            <Col>
              <h4 style={{"float":"left"}} >{login}</h4>
            </Col>
            <br/><br/>
            <Col>
              <h6 style={{"float":"left"}}>Profile URL: {html_url}</h6>
            </Col>
          </Col>
          <Col lg={2}>
            <Button onClick={() => this.props.getUserRepoDetails(login)} style={{"marginTop":"30px"}}>
              Details
            </Button>
          </Col>
          
          { userRepoDetails.length === 0 && <Row>
            No details
            </Row>
          }
          { userRepoDetails.length > 0 && <Row>
            <Container>
              <Row style={{"paddingTop":"10px"}}>
                <Col lg={6} style={{"float":"left"}}>
                    <h4>Repository</h4>
                </Col>
                <Col lg={6} style={{"float":"left"}}>
                    <h4>Language</h4>
                </Col>
              </Row>
            </Container>
            {this.getUserRepoDetails(userRepoDetails)}
            </Row>
          }
        </Row>
      )
    }

  getLoader = () => (
    <Spinner animation="border" role="status" />
  )

  render() {
    const { userData, userRepoDetails, loading } = this.props;
    return (
      <Card>
        <Card.Body>
          {!loading && this.getBasicDetails(userData)}
          {loading && this.getLoader()}
        </Card.Body>
      </Card>
    );
  }
}


export default UserRepoDetails;

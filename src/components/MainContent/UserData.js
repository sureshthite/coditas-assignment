import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class UserData extends Component {

  render(){

	  var {userData} = this.props;
	  
      return (
           	<div>
							<Container>
										<Row>
										<Col lg={6}>
												<b>Repository</b>
										</Col>
										<Col lg={6}>
												<b>Language</b>
										</Col>
										</Row>
									{
									userData.map((user,i) => (
										<Row key={user.id} style={{"paddingTop":"10px"}}>
											<Col lg={6} style={{"float":"left"}}>
													{user.name}
											</Col>
											<Col lg={6} style={{"float":"left"}}>
													{user.language}
											</Col>
										</Row>
									))
								}
							</Container>
           	</div> 
      )
   }
}

export default UserData;

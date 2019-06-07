import React, { Component } from 'react';
import {Col,Nav,Row,Container} from 'react-bootstrap';
import SearchBar from '../MainContent/SearchBar';
import SortBy from '../MainContent/SortBy';
import {connect} from 'react-redux';

class Header extends Component {

	constructor(props){
    super(props);
    this.state = {
			users: []
    };
  }
	
  render() {
    return (
		<div>
			<Nav style={{"backgroundColor": "#0d77b4"}} >
				<Container>
					<Row>
						<Col lg={{span: 8, offset: 2}}>
							<Row style={{"marginTop": "15px"}}>
								<SortBy />
								<SearchBar handleSubmit={this.props.handleSearch} />
							</Row>
						</Col>
					</Row>
				</Container>
			</Nav>
		</div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    data:state.data
  })
}


export default connect(mapStateToProps)(Header);
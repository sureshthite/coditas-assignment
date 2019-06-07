import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserRepoDetails from '../UserRepoDetails/UserRepoDetails';
import { getUserRepoDetails } from '../../actions/appActions';

import {Container,Row,Col, Spinner,Pagination} from 'react-bootstrap';

	class SearchResult extends Component {

	constructor(props){
		super(props);
		this.state = {
			selectedUser: null,
			currentPage:1
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}

  getUserRepoDetails = (loginID) => {
		this.props.setLoading();
		this.setState({
			selectedUser: loginID
		})
    getUserRepoDetails(loginID)
    .then((payload) => {
      this.props.getUerRepoSuccess(
        payload
      );
    })
    .catch((error) => {
      this.props.getUserRepoError("Failed to get user repo details.")
    })
  }

	getUsers = (users) => {
		const { userRepoDetails, loading } = this.props;
		const { selectedUser } =  this.state;

		const indexOfLastData = this.state.currentPage * 10;
		const indexOfFirstData = indexOfLastData - 10;
		const currentUser = users.slice(indexOfFirstData, indexOfLastData);

		return currentUser.map(user => {
			
			return (
			<Row key={user.id} style={{"paddingTop":"10px"}}>
				<Col lg={{span: 8, offset: 2}}>
					<UserRepoDetails
						loading={selectedUser === user.login? loading: false}
						userData={user}
						userRepoDetails={selectedUser === user.login? userRepoDetails: false}
						getUserRepoDetails={this.getUserRepoDetails}
					/>
				</Col>
			</Row>
		)}
		)
	}

	render(){
		const { userData } = this.props;
		const { loading } = this.state;

		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(userData.data.length / 10); i++) {
			pageNumbers.push(i);
		}

		const PageNumbers = pageNumbers.map(number => {
			return (
				<Pagination.Item
					key={number}
					id={number}
					onClick={this.handleClick}
				>
					{number}
					</Pagination.Item>
			);
		});

		return (
			<div>
				<Container>
					<Row>
						<Pagination style={{"paddingTop":"15px","align":"center"}}>
							{PageNumbers}
						</Pagination>
					</Row>
					{this.getUsers(userData.data)}
					{loading && <Spinner animation="border" style={{ marginTop: 100}} />}
					<Pagination>
						{PageNumbers}
					</Pagination>
				</Container>
			</div> 
		)
	}
}

	function mapDispatchToProps(dispatch) {
		return ({
			getUerRepoSuccess: (userRepoDetails) => dispatch({
				type: 'USER_REPO_SUCCESS',
				payload: userRepoDetails
			}),
			getUserRepoError:  (userRepoDetails) => dispatch({
				type: 'USER_REPO_ERROR',
				payload: userRepoDetails
			}),
			setLoading: (userRepoDetails) => dispatch({
				type: 'USER_REPO_FECHING',
			})
		})
	}
	
	function mapStateToProps({ userRepoDetails, userData }) {
		return ({
			userRepoDetails: userRepoDetails.data,
			error: userRepoDetails.error,
			loading: userRepoDetails.loading,
			userData: userData,
		})
	}
	
	export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

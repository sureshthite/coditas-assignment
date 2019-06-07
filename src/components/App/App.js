import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import './App.css';
import Header from '../Header/Header';
import { getUsers } from '../../actions/appActions';
import SearchResult from '../MainContent/SearchResult';
import {connect} from 'react-redux';

class App extends Component {

  handleSearch = (user) => {
    this.props.userFetching();
    getUsers(user)
    .then((users) => {
      this.props.userSucces(users.items);
    })
    .catch((error) => {
      this.props.userError("Something went wrong while fetching users.");
    })
  }
  
  getSearchResult = () => {
    const { userData } = this.props;
    if (!userData.data || userData.data.length === 0) {
      return "No result found";
    }

    return (
      <SearchResult users={this.props.userData.data}/>
    );
  }

  getLoader = () => (
    <Spinner animation="border" role="status" />
  )

  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        <Header handleSearch={this.handleSearch}/>
        {!loading && this.getSearchResult()}
        {loading && this.getLoader()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    userData: state.userData,
    error: state.userData.error,
    loading: state.userData.loading
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    userSucces: (users) => dispatch({
      type:'USER_SUCCESS',
      payload: users
		}),
		userError: (message) => dispatch({
			type:'USER_ERROR',
			payload: message
    }),
    userFetching: () => dispatch({
      type:'USER_FETCHING',
    }), 
	})
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

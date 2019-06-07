import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col,Form} from 'react-bootstrap';

const OPTIONS = [
	{
		name:'Sort By Name (A-Z)',
		value: 'SORT_ASC'
	},
	{
		name:'Sort By Name (Z-A)',
		value: 'SORT_DSC'
	},
	{
		name:'Sort By Rank (L-H)',
		value: 'SORT_RANK_ASC'
	},
	{
		name:'Sort By Rank (H-L)',
		value: 'SORT_RANK_DSC'
	},
];

class SortBy extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sortBy:''
		}
	}

	sortBy = ({target : { value }}) => {
		this.props.sortBy(`${value}`)
	}

	getOption = () => {
		return OPTIONS.map(({name, value}) => (
			<option key={value} value={value}>{name}</option>
		))
	}

	render() {
		return (
			<Col lg={6}>
				<div className="form-group ">
						<Form.Group controlId="sortForm.ControlSelect1">
								<Form.Control as="select" onChange={this.sortBy}>
									{this.getOption()}
								</Form.Control>
						</Form.Group>
				</div>
			</Col>
		);
	}
}

const mapStateToProps = (state) => {
	return({
			userData: state.userData,
	})
}

const mapDispatchToProps = (dispatch) => {
	return ({
		sortBy: (type) => dispatch({
				type
		})
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);

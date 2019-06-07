import React, { Component } from 'react';
import {Form,Col,Button,ButtonToolbar} from 'react-bootstrap';

class SearchBar extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.text.value;
        this.props.handleSubmit(text);
    };

    render() {
        return (
            <Col lg={6}>
                <Form onSubmit={this.handleSubmit}>
                <ButtonToolbar>
                    <Form.Control type="text" name="text" placeholder="Search"/>
                    <Button type="submit" variant="outline-light" style={{"backgroundColor":"#fff","borderLeft": "none","margin": "-38px 0px 0px 310px",}}><i className="fa fa-search" aria-hidden="true" style={{"color":"#000"}}></i></Button>
                </ButtonToolbar>
                </Form>
            </Col>
        );
    }
}

export default SearchBar;

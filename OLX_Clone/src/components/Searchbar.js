import React, { Component } from 'react';
import { Button, Col, Form, FormControl } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';

export default class Searchbar extends Component {
	render() {
		return (
			<Col xs={this.props.xs} lg={this.props.lg} className='offset-sm-1 offset-md-0'>
				<Form className='d-flex'>
					<FormControl
						type='text'
						placeholder='Find Cars, Mobile Phones and more...'
					/>
					<Button variant='dark'>
						<SearchIcon />
					</Button>
				</Form>
			</Col>
		);
	}
}

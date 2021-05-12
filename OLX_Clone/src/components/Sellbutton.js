import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default class Sellbutton extends Component {
	render() {
		return (
			<Col xs={this.props.xs} lg={this.props.lg}>
				<Link to='/sell'>
					<Button className='rounded-pill bg-white text-dark w-100'>
						<AddIcon />
						Sell
					</Button>
				</Link>
			</Col>
		);
	}
}

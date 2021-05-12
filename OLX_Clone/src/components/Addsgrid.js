import React, { Component } from 'react';
import Adds from './Adds';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default class Addsgrid extends Component {
	render() {
		let addItems = this.props.adds.map((value) => {
			return <Adds value={value} key={value.id} />;
		});
		return (
			<Container className='p-5'>
				<Row>
					<h2>Fresh Recommendations</h2>
				</Row>
				<Row xs={1} sm={2} lg={4}>{addItems}</Row>
				<Row>
					<Col xs={2} className='offset-5'>
						<Button className='bg-white border-dark text-dark'>
							Load More
						</Button>
					</Col>
				</Row>
			</Container>
		);
	}
}

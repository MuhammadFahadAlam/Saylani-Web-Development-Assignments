import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Adds from './Adds';

export default class Lastsearch extends Component {
	render() {
		let addItems = this.props.adds.map((value) => {
			return <Adds value={value} key={value.id} />;
		});
		return (
			<Container className='p-5' style={{ background: '#ebeeef' }}>
				<Row>
					<h2>Based on your last search</h2>
				</Row>
				<Row xs={1} sm={2} lg={4}>
					{addItems}
				</Row>
			</Container>
		);
	}
}

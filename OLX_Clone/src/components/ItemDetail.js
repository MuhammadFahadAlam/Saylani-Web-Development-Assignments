import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'

class ItemDetail extends Component {
	render() {
		let details = this.props.currentItem.details;
		console.log(details)
		let detailsItem = Object.keys(details).map((key, index) => {
			return (
				<Col xs={6} key={index}>
					<Container>
						<Row>
							<Col>
								<p className='text-muted'>{key}</p>
							</Col>
							<Col>
								<p>{this.props.currentItem.details[key]}</p>
							</Col>
						</Row>
					</Container>
				</Col>
			);
		});

		return (
			<Container className='p-3'>
				<Row>
					<Col>
						<h5>Details</h5>
					</Col>
				</Row>
				<Row>{detailsItem}</Row>
				<hr />
				<Row>
					<Col>
						<h5>Description</h5>
						<p>{this.props.currentItem.desc}</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	special: state.special,
	currentItem: state.currentItem,
});

export default connect(mapStateToProps, null)(ItemDetail);

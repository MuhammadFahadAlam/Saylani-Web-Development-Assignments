import React, { Component } from 'react';
import { Dropdown, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Categorybar extends Component {
	render() {
		const CategoryItems = this.props.category.map((value, index) => {
			return (
				<Nav.Item key={index}>
					<Nav.Link>
						<Link
							to={{
								pathname: `/Category/${value}`,
								category: { values: value },
							}}
						>
							{value}
						</Link>
					</Nav.Link>
				</Nav.Item>
			);
		});

		const CategoryDrop = this.props.category.map((value, index) => {
			return (
				<Dropdown.Item key={index}>
					<Link
						style={{ width: '100%' }}
						to={{
							pathname: `/Category/${value}`,
							category: { values: value },
						}}
					>
						{value}
					</Link>
				</Dropdown.Item>
			);
		});

		return (
			<Row className='d-flex align-items-center'>
				<Col>
					<Dropdown>
						<Dropdown.Toggle>All Categories</Dropdown.Toggle>
						<Dropdown.Menu>{CategoryDrop}</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col className='offset-xs-1'>
					<Navbar>
						<Nav>{CategoryItems}</Nav>
					</Navbar>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => ({
	category: state.category,
});

export default connect(mapStateToProps)(Categorybar);

import React, { Component } from 'react';
import { Col, Dropdown } from 'react-bootstrap';

export default class Locationbar extends Component {
	render() {
		return (
			<Col xs={this.props.xs} lg={this.props.lg} className='d-none d-md-block'>
				<Dropdown>
					<Dropdown.Toggle className='btn btn-dark'>
						Location
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Header href='#'>
							Popular Location
						</Dropdown.Header>
						<Dropdown.Item href='#'>Karachi</Dropdown.Item>
						<Dropdown.Item href='#'>Punjab</Dropdown.Item>
						<Dropdown.Item href='#'>Sindh</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Header href='#'>
							Recent Location
						</Dropdown.Header>
						<Dropdown.Item href='#'>KPK</Dropdown.Item>
						<Dropdown.Item href='#'>Kashmir</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Col>
		);
	}
}

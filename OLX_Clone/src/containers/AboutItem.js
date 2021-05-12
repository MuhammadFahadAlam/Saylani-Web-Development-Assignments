import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Topbar from '../components/Topbar';
import Categorybar from '../components/Categorybar';
import Footer from '../components/Footer';
import add from '../assets/images/add.PNG';
import Item from '../components/Item';
import Lastsearch from '../components/Lastsearch';
import { connect } from 'react-redux';

class AboutItem extends Component {
	render() {
		return (
			<Container fluid>
				<Topbar />
				<Categorybar />
				<Row>
					<img src={add} alt='add' className='img-fluid' />
				</Row>
				<Item />
				<Lastsearch adds={this.props.special} />
				<Footer />
				<Row style={{ background: '#002f34', color: 'white' }}>
					<Col xs={2}>
						<p style={{ fontSize: '12px', fontWeight: '500' }}>
							Other Countries
						</p>
					</Col>
					<Col xs={2}>
						<p style={{ fontSize: '12px' }}>
							India-South Africa-Indonesia
						</p>
					</Col>
					<Col xs={2} className='offset-4'>
						<p style={{ fontSize: '12px', fontWeight: '500' }}>
							Free Classifieds in Pakistan
						</p>
					</Col>
					<Col xs={2}>
						<p style={{ fontSize: '12px' }}>. © 2006-2020 OLX</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	special: state.special,
});

export default connect(mapStateToProps, null)(AboutItem);

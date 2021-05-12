import React, { Component } from 'react';
import Topbar from '../components/Topbar';
import Categorybar from '../components/Categorybar';
import { Container, Row, Col } from 'react-bootstrap';
import adds from '../assets/images/adds.PNG';
import Lastsearch from '../components/Lastsearch';
import Addsgrid from '../components/Addsgrid';
import addsBottom from '../assets/images/addsBottom.PNG';
import Footer from '../components/Footer';
import {connect} from 'react-redux';

class Home extends Component {
	render() {
		console.log(this.props)
		return (
			<Container fluid>
				<Topbar />
				<Categorybar />
				<Row>
					<img src={adds} alt='adds' className='img-fluid' />
				</Row>
				<Lastsearch adds={this.props.special} />
				<Addsgrid adds={this.props.ads} />
				<Row>
					<img className='img-fluid' src={addsBottom} alt='' />
				</Row>
				<Footer />
				<Row style={{ background: '#002f34', color: 'white' }}>
					<Col sm={6} lg={2}>
						<p style={{ fontSize: '12px', fontWeight: '500' }}>
							Other Countries
						</p>
					</Col>
					<Col sm={6} lg={2}>
						<p style={{ fontSize: '12px' }}>
							India-South Africa-Indonesia
						</p>
					</Col>
					<Col sm={6} lg={2} className='offset-lg-4'>
						<p style={{ fontSize: '12px', fontWeight: '500' }}>
							Free Classifieds in Pakistan
						</p>
					</Col>
					<Col sm={6} lg={2}>
						<p style={{ fontSize: '12px' }}>. © 2006-2020 OLX</p>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	ads: state.ads,
	special: state.special,
})

export default connect( mapStateToProps, null )(Home);
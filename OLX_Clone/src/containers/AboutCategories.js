import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Topbar from '../components/Topbar';
import Categorybar from '../components/Categorybar';
import Footer from '../components/Footer';
import add from '../assets/images/add.PNG';
import Categories from '../components/Categories';
import {connect} from 'react-redux';

class AboutCategory extends Component {
	render() {
		const obj = this.props.location.category.values;
		return (
			<Container fluid>
				<Topbar />
				<Categorybar />
				<Row>
					<img src={add} alt='add' className='img-fluid' />
				</Row>
				<Categories adds={this.props.ads} value={obj} />
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
	currentCategory: state.currentCategory,
	ads: state.ads,
})

export default connect(mapStateToProps, null) (AboutCategory);

import React, { Component } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import logo from '../assets/images/logo.PNG';
import { connect } from 'react-redux';
import {selectCategory} from '../store/action'

class Sell extends Component {
	render() {
		const category = this.props.category.map((value, id) => {
			return (
				<Link to={`/sell/${value}`}  key={id} 
				>
					<Row onClick={() => this.props.selectCategory(value)}>
						<Col
							md={6}
							style={{
								border: '1px solid #c8c8c8',
								height: '50px',
								lineHeight: '50px',
							}}
						>
							<Container>
								<Row>
									<Col xs={10} className='text-dark'>
										<p>{value}</p>
									</Col>
									<Col xs={2}>
										<p className='text-dark'>
											<ArrowForwardIosRoundedIcon />
										</p>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Link>
			);
		});
		return (
			<>
				<Navbar className='navbar bg-light'>
					<Link to='/'>
						<ArrowBackIcon className='text-dark' />
					</Link>
					<Link to='/'>
						<img src={logo} alt='logo' style={{ margin: '10px' }} />
					</Link>
				</Navbar>
				<div style={{ textAlign: 'center', margin: 20 }}>
					<h4>POST YOUR AD</h4>
				</div>

				<Container>
					<Row>
						<Col md={9} className='mx-auto'>
							<Container
								style={{
									border: '1px solid #c8c8c8',
									borderRadius: '5px',
								}}
							>
								<Row style={{ padding: 15 }}>
									<h5>CHOOSE A CATEGORY</h5>
								</Row>
								{category}
							</Container>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	category: state.category,
});

const mapDispatchToProps = (dispatch) => ({
	selectCategory: (data) => dispatch(selectCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sell);

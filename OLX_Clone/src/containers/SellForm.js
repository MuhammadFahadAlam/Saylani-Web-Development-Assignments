import React, { Component } from 'react';
import { Navbar, Button, Container, Row, Col, Form } from 'react-bootstrap';
import ToggleButton from '../components/ToggleButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import logo from '../assets/images/logo.PNG';
import { connect } from 'react-redux';
import { addItem } from '../store/action';

class SellForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 124,
			price: 'Rs 1232434',
			title: 'Car',
			desc: 'what ever',
			loc: 'Karachi',
			pic: [
				'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
				'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
				'https://images.unsplash.com/photo-1549864893-c0d52471098a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
			],
			time: '3days',
			featured: 0,
			seller_pic: 'sd',
			seller: 'Umer',
			details: {
				make: 'Motorola',
				model: 2020,
				used: 2,
				condition: 'A1',
			},
			category: 'Car',
		};
		this.photos = ['', '', '', '', ''];
		this.itemData = {};
		console.log(this.props.ads);
	}

	newItemData = () => {
		this.itemData = this.state;
		this.itemData.pic = this.photos;
		console.log(this.itemData);
		this.props.addItem(this.itemData);
		console.log(this.props.ads);
	};

	render() {
		const obj = this.props.currentCategory;

		return (
			<>
				<Navbar className='navbar bg-light'>
					<Link to='/sell'>
						<ArrowBackIcon className='text-dark' />
					</Link>
					<Link to='/'>
						<img src={logo} alt='logo' style={{ margin: '10px' }} />
					</Link>
				</Navbar>
				<Container>
					<Row>
						<Col style={{ textAlign: 'center', margin: 20 }}>
							<h2>Post your Ad</h2>
						</Col>
					</Row>
					<Row
						style={{
							border: '1px solid #c8c8c8',
							borderRadius: '5px',
							padding: 25,
						}}
					>
						<Col>
							<Container>
								<Row>
									<h5>Selected Category</h5>
								</Row>
								<Row>
									<Col xs={6} md={1}>
										<p>{obj}</p>
									</Col>
									<Col xs={6}>
										<Link to='/sell'>
											<Button className='btn btn-dark'>
												Change
											</Button>
										</Link>
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
					<Row
						style={{
							border: '1px solid #c8c8c8',
							borderRadius: '5px',
							padding: 25,
						}}
					>
						<Col md={7}>
							<Form>
								<h5>INCLUDE SOME DETAILS</h5>
								<Form.Group controlId='title'>
									<Form.Label>Category*</Form.Label>
									<Form.Control
										size='lg'
										type='text'
										onChange={(e) =>
											this.setState({
												category: e.target.value,
											})
										}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Condition*</Form.Label>
									<br />
									<ToggleButton opt1='New' opt2='Used' />
								</Form.Group>
								<Form.Group controlId='title'>
									<Form.Label>Ad title*</Form.Label>
									<Form.Control
										size='lg'
										type='text'
										onChange={(e) =>
											this.setState({
												title: e.target.value,
											})
										}
									/>
									<Form.Text className='text-muted'>
										Mention the key features of your item
										(e.g. brand, model, age, type) 0 / 70
									</Form.Text>
								</Form.Group>

								<Form.Group controlId='description'>
									<Form.Label>Description</Form.Label>
									<Form.Control
										as='textarea'
										rows={3}
										onChange={(e) =>
											this.setState({
												desc: e.target.value,
											})
										}
									/>
									<Form.Text className='text-muted'>
										include condition, features and reason
										for selling 0 / 4096
									</Form.Text>
								</Form.Group>
								<Form.Group controlId='title'>
									<Form.Label>Time*</Form.Label>
									<Form.Control
										size='lg'
										type='text'
										onChange={(e) =>
											this.setState({
												time: e.target.value,
											})
										}
									/>
								</Form.Group>
								<hr />
								<h5>SET A PRICE</h5>
								<Form.Group controlId='title'>
									<Form.Label>Price</Form.Label>
									<InputGroup size='lg'>
										<InputGroup.Prepend>
											<InputGroup.Text id='inputGroup-sizing-lg'>
												Rs |
											</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											aria-label='Large'
											aria-describedby='inputGroup-sizing-sm'
											onChange={(e) =>
												this.setState({
													price: e.target.value,
												})
											}
										/>
									</InputGroup>
								</Form.Group>
								<hr />
								<h5>Photos</h5>
								<Form.Group controlId='photos'>
									<Form.Label>Photo URL</Form.Label>
									<Form.Control
										size='sm'
										type='text'
										onChange={(e) => {
											this.photos[0] = e.target.value;
										}}
									/>
									<Form.Control
										size='sm'
										type='text'
										onChange={(e) => {
											this.photos[1] = e.target.value;
										}}
									/>
									<Form.Control
										size='sm'
										type='text'
										onChange={(e) => {
											this.photos[2] = e.target.value;
										}}
									/>
									<Form.Control
										size='sm'
										type='text'
										onChange={(e) => {
											this.photos[3] = e.target.value;
										}}
									/>
									<Form.Control
										size='sm'
										type='text'
										onChange={(e) => {
											this.photos[4] = e.target.value;
										}}
									/>
								</Form.Group>
								<hr />
								<h5>Other Product Details</h5>
								<Form.Group controlId='location'>
									<Form.Label>Location*</Form.Label>
									<Form.Control
										size='lg'
										type='text'
										onChange={(e) =>
											this.setState({
												loc: e.target.value,
											})
										}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Product Type*</Form.Label>
									<br />
									<ToggleButton
										opt1='Featured'
										opt2='Not Featured'
									/>
								</Form.Group>
								<Form.Group controlId='location'>
									<Form.Label>Featured*</Form.Label>
									<Form.Control
										size='lg'
										type='text'
										onChange={(e) =>
											this.setState({
												featured: parseInt(
													e.target.value
												),
											})
										}
									/>
									<Form.Text className='text-muted'>
										write 1 for featured or 0 otherwise
									</Form.Text>
								</Form.Group>
								<hr />
								<h5>Seller Details</h5>
								<Form.Group>
									<Form.Label>Name*</Form.Label>
									<Form.Control
										size='lg'
										type='text'
										onChange={(e) =>
											this.setState({
												seller: e.target.value,
											})
										}
									/>
								</Form.Group>
								<Form.Group controlId='title'>
									<Form.Label>Photo*</Form.Label>
									<Form.Control
										size='lg'
										type='text'
										onChange={(e) =>
											this.setState({
												seller_pic: [e.target.value],
											})
										}
									/>
								</Form.Group>

								<Button
									className='btn btn-dark'
									onClick={() => this.newItemData()}
								>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	currentCategory: state.currentCategory,
	ads: state.ads,
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (data) => dispatch(addItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SellForm);

import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CarouselItem from './CarouselItem';
import ItemDetail from './ItemDetail';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { connect } from 'react-redux';

class Item extends Component {
	render() {
		const item = this.props.currentItem;
		console.log(this.props);
		return (
			<Row>
				<Col lg={8}>
					<Container fluid>
						<Row
							style={{
								border: '1px solid #c8c8c8',
								borderRadius: '5px',
							}}
						>
							<Col xs={10} className='mx-auto'>
								<CarouselItem pics={item.pic} />
							</Col>
							<Col
								xs={12}
								style={{
									border: '1px solid #c8c8c8',
									borderRadius: '5px',
								}}
							>
								<ItemDetail />
							</Col>
						</Row>
					</Container>
				</Col>
				<Col md={6} lg={4}>
					<Container fluid>
						<Row style={{ marginBottom: '10px' }}>
							<Col
								className='p-3'
								style={{
									border: '1px solid #c8c8c8',
									borderRadius: '5px',
								}}
							>
								<h3>{item.price}</h3>
								<p className='text-muted'>{item.title}</p>
								<p className='d-flex justify-content-between'>
									<span className='text-muted'>
										{item.loc}
									</span>
									<span className='text-muted'>
										{item.time}
									</span>
								</p>
							</Col>
						</Row>
						<Row style={{ marginBottom: '10px' }}>
							<Col
								className='p-3'
								style={{
									border: '1px solid #c8c8c8',
									borderRadius: '5px',
								}}
							>
								<h4>Seller description</h4>
								<Button
									className='text-dark bg-transparent'
									style={{ border: 0, margin: 5 }}
								>
									<AccountCircleOutlinedIcon />
									{item.seller}
								</Button>
								<br />
								<Button className='bg-info'>
									Chat with Seller
								</Button>
							</Col>
						</Row>
						<Row style={{ marginBottom: '10px' }}>
							<Col
								className='p-3'
								style={{
									border: '1px solid #c8c8c8',
									borderRadius: '5px',
								}}
							>
								<h4>Posted in</h4>
								<p className='text-muted'>{item.loc}</p>
								<b>Map</b>
							</Col>
						</Row>
						<p className='d-flex justify-content-between'>
							<span className='text-muted'>AD ID {item.id}</span>
							<span className='text-muted'>REPORT THIS AD</span>
						</p>
					</Container>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => ({
	special: state.special,
	currentItem: state.currentItem,
});

export default connect(mapStateToProps, null)(Item);

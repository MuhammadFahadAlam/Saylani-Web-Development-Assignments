import React, { Component } from 'react';
import Adds from './Adds';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { connect } from 'react-redux';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: 3,
		};
	}

	render() {
		let view = this.state.view;
		let CategoryName = this.props.category.map((value, index) => {
			return (
				<Link
					key={index}
					to={{
						pathname: `/Category/${value}`,
						category: { values: value },
					}}
				>
					<p className='text-muted'> {value}</p>
				</Link>
			);
		});
		let CategoryItem = this.props.special.filter(
			(ad) => ad.category === this.props.value
		);

		let addItems = CategoryItem.map((value) => {
			return <Adds value={value} key={value.id} />;
		});
		return (
			<Container className='p-5'>
				<Row>
					<h2>{this.props.value}</h2>
				</Row>
				<Row>
					<Col xs={2}>
						<Container fluid>
							<Row>
								<h5>Filter</h5>
							</Row>
							<hr />
							<Row>
								<Col>
									<h5>Categories</h5>
									{CategoryName}
								</Col>
							</Row>
						</Container>
					</Col>
					<Col xs={9} className='offset-1'>
						<Container>
							<Row className='d-none d-lg-block d-xl-block d-xl-none'>
								<Col xs={7}></Col>
								<Col xs={5}>
									<Container>
										<Row>
											<Col>
												<h5>View</h5>
											</Col>
											<Col>
												<button
													style={{
														background:
															'transparent',
														border: 0,
													}}
													onClick={() =>
														this.setState({
															view: 3,
														})
													}
												>
													<ViewModuleIcon />
												</button>

												<button
													style={{
														background:
															'transparent',
														border: 0,
													}}
													onClick={() =>
														this.setState({
															view: 1,
														})
													}
												>
													<ViewListIcon />
												</button>
											</Col>
										</Row>
									</Container>
								</Col>
							</Row>
							<hr />
							<Row xs={1} lg={view}>
								{addItems}
							</Row>
							<Row>
								<Col xs={2} className='offset-5'>
									<Button className='bg-white border-dark text-dark'>
										Load More
									</Button>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	category: state.category,
	special: state.special,
});

export default connect(mapStateToProps)(Categories);

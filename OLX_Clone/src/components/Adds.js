import { Card, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectItem } from '../store/action';

class Adds extends Component {
	render() {
		console.log(this.props);
		let featured;
		if (this.props.value.featured === 1) {
			featured = (
				<>
					<p
						className='bg-warning p-1 text-center'
						style={{
							fontWeight: 700,
							fontSize: 9,
							position: 'absolute',
						}}
					>
						FEATURED
					</p>
					<div
						style={{
							width: '5px',
							height: '100px',
							background: '#ffce32',
							position: 'absolute',
							bottom: 0,
							left: 0,
						}}
					></div>
				</>
			);
		}
		return (
			<Col>
				<Link
					to={`/Item/${this.props.value.title}-${this.props.value.id}-${this.props.value.seller}`}
				>
					<Card
						className='p-2 my-3'
						style={{
							position: 'relative',
							cursor: 'pointer',
							color: 'black',
						}}
						onClick={() => this.props.selectItem(this.props.value)}
					>
						<Card.Img
							variant='top'
							src={this.props.value.pic[0]}
							style={{
								width: '100%',
								minHeight: '12vw',
								objectFit: 'cover',
							}}
						></Card.Img>
						<Card.Body>
							<Card.Title>{this.props.value.price}</Card.Title>
							<Card.Text>{this.props.value.title}</Card.Text>
							<Card.Text>
								<small className='text-muted float-left'>
									{this.props.value.loc}
								</small>
								<small className='text-muted float-right'>
									{this.props.value.time}
								</small>
							</Card.Text>
						</Card.Body>
						<FavoriteBorderIcon
							style={{
								position: 'absolute',
								top: '5px',
								right: '5px',
							}}
						/>
						{featured}
					</Card>
				</Link>
			</Col>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	selectItem: (data) => dispatch(selectItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Adds);

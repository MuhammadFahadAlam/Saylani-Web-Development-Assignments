import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Footer extends Component {
	render() {
		return (
			<Row className='p-5' style={{ background: '#ebeeef' }}>
				<Col sm={6} lg={2}>
					<h5>Popular Categories</h5>
					<small className='text-muted float-left'>Cars</small>
					<br />
					<small className='text-muted float-left'>
						Flats for rent
					</small>
					<br />
					<small className='text-muted float-left'>Jobs</small>
					<br />
					<small className='text-muted float-left'>Mobile</small>
				</Col>
				<Col sm={6} lg={2}>
					<h5>Popular Categories</h5>
					<small className='text-muted float-left'>Cars</small>
					<br />
					<small className='text-muted float-left'>
						Flats for rent
					</small>
					<br />
					<small className='text-muted float-left'>Jobs</small>
					<br />
					<small className='text-muted float-left'>Mobile</small>
				</Col>
				<Col sm={6} lg={2}>
					<h5>Popular Categories</h5>
					<small className='text-muted float-left'>Cars</small>
					<br />
					<small className='text-muted float-left'>
						Flats for rent
					</small>
					<br />
					<small className='text-muted float-left'>Jobs</small>
					<br />
					<small className='text-muted float-left'>Mobile</small>
				</Col>
				<Col sm={6} lg={2}>
					<h5>Popular Categories</h5>
					<small className='text-muted float-left'>Cars</small>
					<br />
					<small className='text-muted float-left'>
						Flats for rent
					</small>
					<br />
					<small className='text-muted float-left'>Jobs</small>
					<br />
					<small className='text-muted float-left'>Mobile</small>
				</Col>
				<Col sm={12} lg={2}>
					<h5>Follow us</h5>
					<FacebookIcon className='m-2' />
					<TwitterIcon className='m-2' />
					<YouTubeIcon className='m-2' />
					<InstagramIcon className='m-2' />
				</Col>
			</Row>
		);
	}
}

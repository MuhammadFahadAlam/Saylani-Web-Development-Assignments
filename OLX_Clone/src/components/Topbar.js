import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Locationbar from './Locationbar';
import Searchbar from './Searchbar';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import logo from '../assets/images/logo.PNG';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Sellbutton from './Sellbutton';
import { Link } from 'react-router-dom';

export default class Topbar extends Component {
	render() {
		return (
			<Row
				className='sticky-top bg-light d-flex align-items-center fixed-top'
				style={{ height: '60px', lineHeight: '60px' }}
			>
				<Col xs={1}>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</Col>
				<Locationbar xs={2} lg={2}/>
				<Searchbar  xs={5} lg={5} />
				<Col xs={1} lg={1}>
					<Button className='bg-transparent border-0 text-dark'>
						<ChatBubbleOutlineOutlinedIcon />
					</Button>
				</Col>
				<Col xs={1} lg={1}>
					<AccountCircleOutlinedIcon />
				</Col>
				<Sellbutton xs={2} lg={2} />
			</Row>
		);
	}
}

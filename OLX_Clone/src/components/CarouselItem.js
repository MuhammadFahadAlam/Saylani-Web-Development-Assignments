import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

export default class CarouselItem extends Component {
	render() {
		const pictures = this.props.pics.map((value, index) => {
			return (
				<div key={index} style={{width:'100%'}}>
					<img src={value} className="img-fluid" alt=""/>
				</div>
			)
		})
		return (
			<Carousel autoplay>
				{pictures}
			</Carousel>
		);
	}
}

import React, { Component } from 'react';
import LazyLoad from "react-lazyload";
import { getAlbum } from "../services/albumService";
import SingleAlbum from "./SingleAlbum";


class Album extends Component {
	state = {
		imgUrl: 'https://via.placeholder.com/150/00ff',
		items: []
	}
	// get albums on init
	async componentDidMount() {
		const { data: items } = await getAlbum();
		this.setState({ items });
		
	}
	render() {
		const { items, imgUrl } = this.state;
			return (
						<div>
							<div className="album py-5 bg-light">
							    <div className="container">
							      <div className="row">
							  { /* Code for rendering initial thumbnails  */}
					      				{
									      	items.map(item => (
									      		<LazyLoad>
												<SingleAlbum 
						 						key={item.id}
												imgUrl={imgUrl}
												item={item}
												 />
												 </LazyLoad>
									      	))
									    }
							      </div>
							    </div>
							</div>
						</div>
					)
		}
}

export default Album;
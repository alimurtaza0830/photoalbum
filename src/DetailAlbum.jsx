import React, { Component } from 'react';
import { getAlbum, getDetails } from "./services/albumService";

class DetailAlbum extends Component {
	state = {
		details: [],
		modelOpen: false
	}

	async componentDidMount() {
		const { data: details } = await getDetails();
		this.setState({ details });
		
	}
	getItem = id => {
    const album = this.state.details.find(item => item.id === id);
    console.log(album);
    return album;
  	};
  	openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { details: product, modalOpen: true };
    });
  	};
  	closeModal = () => {
    	this.setState(() => {
      	return { modalOpen: false };
    	});
  	};
	render() {
		const { details } = this.state;
		return (
			<div>
				<div className="album py-5 bg-light">
				    <div className="container">
				      <div className="row">
					      {
					      	details.map(detail => (
								<div className="col-md-3" key={detail.id}>
							          <div className="card mb-4 shadow-sm" >
							            <img className="card-img-top" src={detail.thumbnailUrl} alt="Card image cap" onClick={() => this.openModal(detail.id)} />
							            <div className="card-body">
							           	  <h5 className="card-title">{detail.albumId}</h5>
							              <p className="card-text">{detail.title}</p>
							            </div>
							          </div>
							    </div>
					      		)
					      	)
					      }
						
				      </div>
				    </div>
				</div>
			</div>
		);
	}
}

export default DetailAlbum;
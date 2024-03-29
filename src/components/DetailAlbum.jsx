import React, { Component } from 'react';
import LazyLoad from "react-lazyload";
import { getDetails } from "../services/albumService";
import Modal from '../common/Modal';
import Pagination from '../common/Pagination';




class DetailAlbum extends Component {
	state = {
		details: [],
		modalOpen: false,
		modalAlbum: [],
		albumPerPage: 4,
		currentPage: 1
	}
	// populate albums on init
	async componentDidMount() {
		const { data: details } = await getDetails();
		this.setState({ details });
		
	}
	// filter selected item
	getItem = id => {
    const album = this.state.details.find(item => item.id === id);
    return album;
  	};
  	// open modal
  	openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalAlbum: product, modalOpen: true };
    });
  	};
  	// modal close
  	closeModal = () => {
    	this.setState(() => {
      	return { modalOpen: false };
    	});
  	};
  	// click even in pagination handler
  	handleClick = (event) => {
  		this.setState({
  			currentPage: Number(event.target.id)
  		});
  	};
  	// select how many records to show
  	handleChange = (event) => {
  		var toShow = event.target.value;
  		this.setState({ albumPerPage: toShow });
  	}
  	

	render() {

		const { details, currentPage, albumPerPage } = this.state;
		const indexOfLastAlbum = currentPage * albumPerPage;
		const indexOfFirstAlbum = indexOfLastAlbum - albumPerPage;
		const currentAlbum = details.slice(indexOfFirstAlbum, indexOfLastAlbum);

		// calculate number of pages
		const pageNumbers = [];
		  for (let i = 1; i <= Math.ceil(details.length / albumPerPage); i++) {
          pageNumbers.push(i);
         
        };
   
		return (
			
			<div>
				<div className="album py-5 bg-light">
				    <div className="container">
					    <div className="row">
					{ /* Code for back button  */}
					    	<div className="col-xs-6 col-sm-6">
					    		<button className="btn-btn-primary btn-sm"
						      		onClick={this.props.history.goBack}>
						      		Go Back
						      	</button>
						    	
					    	</div>
					    	<div className="col-xs-6 col-sm-6">
					    { /* Code for Select Album to show  */}
						    	<div className="form-group row">
							      <label className="col-sm-6 col-form-label text-right"> Show: </label>
							      <div className="col-sm-6">
								      <select className="form-control" value={this.state.albumPerPage} onChange={this.handleChange}>
								        <option value="4">4</option>
								        <option value="5">5</option>
								        <option value="10">10</option>
								      </select>
							      </div>
							    </div>
						    </div>
					    </div>
					{ /* Code for rendering thumbnails  */}
					      <div className="row">
						      {
						      	currentAlbum.map((album, index) => {
									return (
										<LazyLoad>
											<div className="col-md-3" key={album.id}>
										        <div className="card mb-4 shadow-sm">
										        
										          <img className="card-img-top" src={album.thumbnailUrl} alt="Card image cap" onClick={() => this.openModal(album.id)} />
										         
										          <div className="card-body">
										           	<h5 className="card-title">{album.albumId}</h5>
										            <p className="card-text">{album.title}</p>
										          </div>
										        </div>
											</div>
										</LazyLoad> 
									)
								})
						      }
							
					      </div>
					  	{ /* Code for Pagination  */}
					      <div className="row">
						      <div className="col-md-12">
						      	<ul className="pagination">
						    	{
						    		pageNumbers.map(number => {
						    			return ( 
						    			 <Pagination handleClick={this.handleClick} number={number} key={number} />
						    			)
						    		})
						    	}
						    	</ul>
						      </div>
					      </div>
				    </div>
				    <Modal 
					details={details}
					closeModal={this.closeModal}
					modalAlbum={this.state.modalAlbum}
					modalOpen={this.state.modalOpen}
					/>
				</div>
				
			</div>
		);
	}
}

export default DetailAlbum;
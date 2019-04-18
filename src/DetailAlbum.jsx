import React, { Component } from 'react';
import { getDetails } from "./services/albumService";
import Modal from './components/Modal';
import Pagination from './components/Pagination';


class DetailAlbum extends Component {
	state = {
		details: [],
		modalOpen: false,
		modalAlbum: [],
		albumPerPage: 4,
		currentPage: 1,
	}

	async componentDidMount() {
		const { data: details } = await getDetails();
		this.setState({ details });
		
	}
	getItem = id => {
    const album = this.state.details.find(item => item.id === id);
    return album;
  	};

  	openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalAlbum: product, modalOpen: true };
    });
  	};
  	closeModal = () => {
    	this.setState(() => {
      	return { modalOpen: false };
    	});
  	};

  	handleClick = (event) => {
  		this.setState({
  			currentPage: Number(event.target.id)
  		});
  	}
	render() {
		const { details, currentPage, albumPerPage } = this.state;
		// const { thumbnailUrl, albumId, title } = this.state.details;
		const indexOfLastAlbum = currentPage * albumPerPage;
		const indexOfFirstAlbum = indexOfLastAlbum - albumPerPage;
		const currentAlbum = details.slice(indexOfFirstAlbum, indexOfLastAlbum);

		console.log(currentAlbum);
		const pageNumbers = [];
		  for (let i = 1; i <= Math.ceil(details.length / albumPerPage); i++) {
          pageNumbers.push(i);
         
        };
  
		return (
			
			<div>
				<div className="album py-5 bg-light">
				    <div className="container">
				    <div className="row">
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
				      <div className="row">
					      {
					      	currentAlbum.map((album, index) => {
								return (
									<div className="col-md-3" key={album.id}>
								        <div className="card mb-4 shadow-sm" >
								          <img className="card-img-top" src={album.thumbnailUrl} alt="Card image cap" onClick={() => this.openModal(album.id)} />
								          <div className="card-body">
								           	<h5 className="card-title">{album.albumId}</h5>
								            <p className="card-text">{album.title}</p>
								          </div>
								        </div>
									</div>
								)
							})
					      }
						
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
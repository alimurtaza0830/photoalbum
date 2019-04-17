import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modal extends Component {

  

	render () {
    const { details, closeModal, modalOpen } = this.props;

      if(!modalOpen) 
        {
          return null
        }
      else 
        {
      		return (
      			<div className="modalcontainer">
      				 <div id="modal" className="col-sm-12 col-md-12 mx-auto col-lg-12 text-center text-capitalize p-5"
                          >
                    <img src={details.thumbnailUrl} className="img-fluid" alt="product" />
                    <h5>Album :{details.id}</h5>
                      <h5 className="text-muted">User: {details.id}</h5>
                      <Link to="/DetailAlbum">
                        <button className="btn btn-primary btn-sm" onClick={() => closeModal()} > Close Modal </button>
                      </Link>
                </div>
            </div>
      		)
    	  }
    }
}

export default Modal;
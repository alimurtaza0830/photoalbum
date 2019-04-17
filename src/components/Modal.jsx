import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modal extends Component {

  

	render () {
    const { modalOpen, modalClosed, img, title, id } = this.props;
    const { };
      if(!modalOpen) 
        {
          return null
        }
      else 
        {
      		return (
      			<div>
      				<div className="container">
      					<div className="row">
                          <div
                            id="modal"
                            className="col-md-12 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                          >
                            <img src={img} className="img-fluid" alt="product" />
                            <h5>{title}</h5>
                            <h5 className="text-muted">{id}</h5>
                            <Link to="/DetailAlbum">
                              <button className="btn btn-primary btn-sm" onClick={() => closeModal()} > Close Modal </button>
                            </Link>
                          </div>
                        </div>
      				</div>
      			</div>
      		)
    	  }
    }
}
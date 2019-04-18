import React from 'react';
import { Link } from 'react-router-dom';


const SinlgeAlbum = ({ imgUrl, id, title, item }) => { 
			return (
				<React.Fragment>
					<div className="col-md-3" key={item.id}>
					 <div className="card mb-4 shadow-sm" >
				          <Link to="/detailAlbum">
				            <img className="card-img-top" src={imgUrl} alt="Card image cap" />
				          </Link>
				            <div className="card-body">
				           	  <h5 className="card-title">{item.id}</h5>
				              <p className="card-text">{item.title}</p>
				            </div>
				          </div>
				    </div>
			    </React.Fragment>
			)
}

export default SinlgeAlbum;
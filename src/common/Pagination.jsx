import React, { Component } from 'react';

function Pagination ({ number, handleClick }) {
				
			return (
				<li onClick={handleClick}  className="page-item">
				    <a id={number} className="page-link">{number}</a>
				</li>
			    );
}


export default Pagination;
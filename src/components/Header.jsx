import React from "react";

export default function Header() {
  return (
   <header>
	  <div className="navbar navbar-dark bg-dark shadow-sm">
	    <div className="container d-flex justify-content-between">
	      <a href="/" className="navbar-brand d-flex align-items-center">
	        <strong>Photo Album</strong>
	      </a>
	    </div>
	  </div>
	</header>
  );
}

import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import  Album  from './Album';
import  DetailAlbum  from './DetailAlbum';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />
	      <Switch>
	      	<Route exact path="/" component={Album} />
	          <Route path="/detailAlbum" component={DetailAlbum} />
	        <Album />
	      </Switch>
      </React.Fragment>
      
    );
  }
}

export default App;

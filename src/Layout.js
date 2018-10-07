import React, { Component } from 'react';
import Header from './components/header'

class Layout extends Component{

	render(){
		return(
			<div className="layout">
				<Header {...this.props} />
				{ this.props.children }
			</div>
		);
	}
}

export default Layout;
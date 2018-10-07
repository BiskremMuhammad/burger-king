import React, { Component } from 'react';

class Modal extends Component{

	shouldComponentUpdate(nextProps, nextState){
		return nextProps.show !== this.props.show || this.props.show;
	}

	render(){
		return (
			<div className={this.props.show ? 'modal popup' : 'modal'} onClick={(e) => {this.props.dismiss(e)}}>
				<div className="modal-wrapper" style={{
					animationName: this.props.show ? 'slide-up' : 'slide-down'
				}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Modal;
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import actions
import * as actionTypes from '../../store/actions';

import BurgerIngredients from './BurgerIngredients';
import BurgerPreview from './burgerPreview';
import Modal from '../UI/Modal';
import OrderSummary from './OrderSummary';
import Spinner from '../UI/spinner';

class BurgerBuilder extends Component{
	state = {
		layers: [],
		totalCost: 0,
		showCheckout: false,
		checkout: false
	}

	findCost = (type) => {
		let ingArray = this.props.ingredients;
		for(let i = 0; i < ingArray.length; i++){
		  if(type === ingArray[i].type){
		    return ingArray[i].cost;
		  }
		}
		return 0;
	}

	calcCost = () => {
		let totalCost = 0;
		for(let i = 0; i < this.state.layers.length; i++){
			totalCost += this.state.layers[i].cost;
		}
		totalCost += this.props.BreadTopCost + this.props.BreadBottomCost;
		this.setState({ totalCost });
	}

	componentWillMount(){
		this.calcCost();
	}

	removeLayer = (key) => {
		this.setState((prevState) => {
			return {layers: prevState.layers.filter((layer,index) => index !== key)};
		},() => { this.calcCost(); });
	}

	addLayer = (layerType) => {
		let layerCost = this.findCost(layerType);
		let layer = {layer: layerType, cost: layerCost};
		let newLayers = this.state.layers.concat(layer);
		this.setState({ layers: newLayers }, () => { this.calcCost(); });
	}

	purchase = () => {
		if(this.state.layers.length)
			this.setState({ showCheckout: true });
	}

	dismiss = (event) => {
		if(event.target.classList.contains('modal') || event.target.classList.contains('dismiss-btn')){
			this.setState({ showCheckout: false });
		}
	}

	checkout = (customer) => {
		this.setState({ checkout: true });
		const data = {layers: this.state.layers,customer};
		axios.post('', data)
			.then((res) => {
				this.props.purchase(data);
				this.setState({ checkout: false });
			});
	}

	render(){
		let modalContent = (
			<OrderSummary
				layers={this.state.layers}
				totalCost={this.state.totalCost}
				breadTopCost={this.props.BreadTopCost}
				breadBottomCost={this.props.BreadBottomCost}
				dismiss={this.dismiss}
				checkout={this.checkout} />
			);
		if(this.state.checkout)
			modalContent = <Spinner />;
		return(
			<div className="builder-container row mr-0 ml-0">
				<Modal show={this.state.showCheckout} dismiss={this.dismiss}>
					{modalContent}
				</Modal>
				<BurgerPreview layers={this.state.layers} />
				<BurgerIngredients layers={this.state.layers} ingredients={this.props.ingredients} totalCost={this.state.totalCost} removeLayer={this.removeLayer} addLayer={this.addLayer} purchase={this.purchase} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ingredients: state.ingredients,
		BreadTopCost: state.BreadTopCost,
		BreadBottomCost: state.BreadBottomCost
	};
};

const mapDispatchToProps = dispatch => {
	return {
		purchase: (order) => dispatch({type: actionTypes.PURCHASE, order})
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
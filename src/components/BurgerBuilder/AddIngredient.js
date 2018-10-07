import React, { Component } from 'react';

class AddIngredient extends Component {

	addLayer(e) {
		e.preventDefault();
		let layer = this.refs.ingredient.value;
		this.props.addLayer(layer);
	}

	render(){
		return (
			<div className="add-ing-container">
				<form onSubmit={this.addLayer.bind(this)} className="d-flex">
					<select className="ing-select to-flex mr-3" ref="ingredient">
						{this.props.ingredients.map((ing,index) => <option key={index} value={ing.type}>{ing.type}</option>)}
					</select>
					<button className="add-ingredient" type="submit">ADD</button>
				</form>
			</div>
		);
	}
};

export default AddIngredient;
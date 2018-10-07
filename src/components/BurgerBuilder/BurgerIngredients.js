import React from 'react';
import IngredientControllerItem from './ingredientControllerItem';
import AddIngredient from './AddIngredient';

const BurgerIngredients = (props) => {
	return(
		<div className="add-ingredients-container col-md-5">
			<div className="in-controllers">
				<div className="total-cost">$ {props.totalCost.toFixed(2)}</div>
				<button className="order-btn" onClick={() => props.purchase()} disabled={props.layers.length ? '' : 'disabled'}>Purchase</button>
				{props.layers.map((ingredient, index) => <IngredientControllerItem key={index} layerIndex={index} type={ingredient.layer} ingCost={ingredient.cost.toFixed(2)} canRemove removeLayer={props.removeLayer} />)}
				<AddIngredient ingredients={props.ingredients} addLayer={props.addLayer}  />
			</div>
		</div>
	);
}

export default BurgerIngredients;
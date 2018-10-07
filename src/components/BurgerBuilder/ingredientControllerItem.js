import React from 'react';

const ingredientControllerItem = (props) => {
	return (
		<li className="in-controller-item d-flex">
			<span className="to-flex">{props.type}</span>
			<span className="in-cost mr-3 ml-3">{props.ingCost}</span>
			{props.canRemove ? <span className="in-remove" onClick={() => {props.removeLayer(props.layerIndex)}}><i className="fas fa-times"></i></span> : null}
		</li>
	);
}

export default ingredientControllerItem;
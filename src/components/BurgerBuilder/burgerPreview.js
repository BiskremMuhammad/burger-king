import React from 'react';
import Ingredient from './ingredient';

const burgerPreview = (props) => {
	return(
		<div className="burger-preview col-md-7">
			<div className="burger">
				<Ingredient type="BreadTop" />
				{props.layers.map((ingredient, index) => <Ingredient key={index} type={ingredient.layer} />)}
				<Ingredient type="BreadBottom" />
			</div>
		</div>
	);
}

export default burgerPreview;
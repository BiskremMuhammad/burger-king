import React from 'react';

const ingredient = (props) => {
	let extraTopLayers = null;
	if(props.type === 'BreadTop'){
		extraTopLayers = (<div><div className="Seeds1"></div><div className="Seeds2"></div></div>);
	}
	return(
		<div className={props.type}>
			{extraTopLayers}
		</div>
	);
}

export default ingredient;
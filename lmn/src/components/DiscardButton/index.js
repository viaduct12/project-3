import React from 'react';


const Button = (props) => {
	console.log(props.style);
	return(
	<button 
		style= {props.style} 
		className = "modal-close waves-effect waves-red btn-flat"
		onClick= {props.action} title={'clear'}> 
		Discard
	</button>)
}

{/* <button action={this.handleClearForm} type={'secondary'} title={'clear'}  className="modal-close waves-effect waves-red btn-flat">
Discard</button> */}

export default Button;
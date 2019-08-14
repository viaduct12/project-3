import React from 'react';


const Button = (props) => {
	console.log(props.style);
	return(
	<button 
		style= {props.style} 
		className = "modal-close waves-effect waves-green btn-flat"
		onClick= {props.action} title={'submit'}> 
		Post
	</button>)
}

{/* <button action={this.handleSubmitForm} type={'primary'} title={'submit'} className="modal-close waves-effect waves-green btn-flat">
Post
</button> */}

export default Button;
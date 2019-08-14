import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './style.css';
import Input from '../Input';  
import TextArea from '../TextArea'; 
import PostButton from '../PostButton';
import DiscardButton from '../DiscardButton';
import Options from '../Options';
import API from "../../utils/API";

class Modal extends Component {
  constructor(props){
    super(props);

    this.state = {
      newPost: {
        username: '',
        title: '',
        description: '',
        category: this.props.category
      },

      categoryOptions: ['Anime & Gaming', 'Charities', 'Design', 'Environment', 'Media', 'Movements', 'Politics', 'Podcasts', 'Sports', 'Technology']
    }

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleOption = this.handleOption.bind(this);

  }

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

handleInput(e) {
      let value = e.target.value;
      let name = e.target.name;
  this.setState( prevState => ({ newPost : 
        {...prevState.newPost, [name]: value
        }
      }), () => console.log(this.state.newPost))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newPost: {
        ...prevState.newPost, description: value
      }
      }), ()=>console.log(this.state.newPost))
  }


handleOption(e) {
  e.preventDefault();



}

  handleFormSubmit(e) {
    e.preventDefault();
    let postData = this.state.newPost;
    console.log(postData)
    API.createPost(postData)
      .then(response => {
          console.log("Successful" + response);
        })
  } 

  handleClearForm(e) {
  
    e.preventDefault();
    this.setState({ 
      newPost: {
        username: '',
        title: '',
        description: '',
        category: []
      },
    })
}


  render() {
    return (
      <div>
        <button
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >Create a Post</button>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <h4>New Topic</h4>
            {/* Name of the user */}
            <Input inputType={'text'}
            title= {'Username'} 
            name= {'username'}
            value={this.state.newPost.username} 
            placeholder = {'Enter your name'}
            handleChange = {this.handleInput}/> 
              {/* Name of the topic */}
            <Input inputType={'text'}
                  title= {'Topic'} 
                  name= {'title'}
                  value={this.state.newPost.title} 
                  placeholder = {'Enter your topic'}
                  handleChange = {this.handleInput}/> 
          {/* Category Options */}
            <Options action={this.handleOption}/>
          {/* Discussion*/}
          <TextArea
            title={'What would you like to discuss?'}
            rows={10}
            value={this.state.newPost.text}
            name={'Discussion'}
            handleChange={this.handleTextArea}
            placeholder={'type away!'} />

          <div className="modal-footer">
            <PostButton action={this.handleFormSubmit}/>
            {/* <button action={this.handleSubmitForm} type={'primary'} title={'submit'} className="modal-close waves-effect waves-green btn-flat">
              Post
            </button> */}
              <DiscardButton action={this.handleClearForm}/>
            {/* <button action={this.handleClearForm} type={'secondary'} title={'clear'}  className="modal-close waves-effect waves-red btn-flat">
              Discard</button> */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Modal;

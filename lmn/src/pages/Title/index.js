import React from 'react';
import titleImage from './image/titleImage.png'; 
import './style.css';

function TitleImage() {
  
  return <div id="containerTitle"><img className="responsive" id="abdul" src={titleImage} alt="" /> </div>;
}

export default TitleImage;
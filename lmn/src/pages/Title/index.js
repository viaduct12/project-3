import React from 'react';
// import titleImage from './image/titleImage.png'; 
import { AnimatedText } from "../Animated/AnimatedText";
import './style.css';

function TitleImage() {
  return (
      <div className="titleImage">
  <AnimatedText textColor="white" 
  overlayColor="lightseagreen">
    Learn More News
  </AnimatedText>
</div>
  )

}

export default TitleImage;
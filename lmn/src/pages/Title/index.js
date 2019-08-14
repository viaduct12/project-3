import React from 'react';
// import titleImage from './image/titleImage.png'; 
import { AnimatedText } from "../Animated/AnimatedText";
import './style.css';

function TitleImage() {
  return (
    <div className="containerTitle">

      <div className="titleImage">
        <AnimatedText textColor="white" overlayColor="lightseagreen">
          Learn More News

          {/* <div className="containerBottomTitle"> hi
              <div style=" display: table-cell"> </div>
              <div style=" display: table-cell"> </div>
              <div style=" display: table-cell"> </div>
          </div> */}
        </AnimatedText>

        <div className="containerBottomTitle"> hi</div>
      </div>

      {/* <div style="; display: table;">
        <div style="display: table-row">
          <div style="width: 30px; display: table-cell;"> Left </div>
          <div style="width: 30px; display: table-cell;"> middle </div>
          <div style="display: table-cell;"> Right </div>
        </div>
      </div> */}

      


    </div>
  )

}

export default TitleImage;
import React from 'react';
import './style.css';

const Option = () => (  
  <div className="input-field col s12" id="input-container">
    <div className="col-75">
{/* <label id="select">Category Select</label> */}
      <select id="category" className="browser-default">
        <option value="announcements">announcements</option>
        <option value="anime_gaming">anime & gaming</option>
        <option value="charities">charities</option>
        <option value="design">design</option>
        <option value="environment">environment</option>
        <option value="media">media</option>
        <option value="movements">movements</option>
        <option value="politics">politics</option>
        <option value="sports">sports</option>
        <option value="technology">technology</option>
      </select>
    </div>
    </div>
);

export default Option;


import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Categories() {

  return (

    <div>
      {/* Categories Colum */}
      <div className="col s4" id="category-container">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Categories</span>
            <Link to="/forum/announcements"><h6>Announcements</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/anime_gaming"><h6>Anime & Gaming</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/charities"><h6>Charities</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/design"><h6>Design</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/environment"><h6>Environment</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/media"><h6>Media</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/movements"><h6>Movements</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/politics"><h6>Politics</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/podcasts"><h6>Podcasts</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/sports"><h6>Sports</h6></Link>
            <div className="divider"></div>
            <Link to="/forum/technology"><h6>Technology</h6></Link>
          </div>
        </div>
      </div>
    </div>

  )


}
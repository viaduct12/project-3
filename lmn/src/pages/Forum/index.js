import React from "react";

function Forum() {
    return (
    <div className="Forum-page">
        <div className="jumbotron">
            <h1>Forum Page</h1> 
        </div>
        {/* NAV BAR  */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <ul class="navbar-nav">
    <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">General Discussion</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Hot Topics</a>
    </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="#">Politics</a>
        <a className="dropdown-item" href="#">Technology</a>
        <a className="dropdown-item" href="#">Comments and Feedback</a>
        </div>
    </li> 
    </ul>
        </nav>
<div className="container">
    <div className="row">
{/* POST */}
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-2">
                        <a className="btn btn-light" id="formButton">New Post</a>
                    </div>
                </div>
                <form id="cms">
                    <div className="form-group">
                        <input type="text" id="forumid" value="{{forum_data.id}}" hidden>
                        <label for="title">Title:</label>
                        <input type="text" class="form-control" id="title">
                        <br />
                        <label for="body">Body:</label>
                        <textarea className="form-control" rows="10" id="body"></textarea>
                        <div className="form-group">
                            <label for="category">Select Category:</label>
                            <select className="custom-select" id="category">
                                <option value="Music Review">Music Review</option>
                                <option value="Similar Music">Similar Music</option>
                                <option value="Discussion">Discussion</option>
                            </select>
                        </div>
                        <br />
                        <button id="submit-button" type="submit">Submit</button>
                    </input>
                    </input>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>


    );
}

export default Forum;
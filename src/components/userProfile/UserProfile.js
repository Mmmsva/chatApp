import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://3.bp.blogspot.com/-okEjGspwMmo/W4gLZ0uTgxI/AAAAAAAAJK4/RCZEAi3gCqkMILOQZ38bOMcHgu91IeshwCLcBGAs/s1600/Peaceful.jpg" />
          </div>
          <h4>M.S</h4>
          <p>Junior Front-end Developer</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
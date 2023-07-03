import React, { PureComponent } from "react";
import Clothing from "../../NavBar/Assests/clothing1.jpg";
import "./Home.scss";

export default class HomeComponent extends PureComponent {
  render() {
    return (
      <div className="main-container">
        <div className="home-image">
          <img src={Clothing} className="picture" width="100%" alt="clothes" />
        </div>
      </div>
    );
  }
}

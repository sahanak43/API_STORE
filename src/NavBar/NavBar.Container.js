import React, { PureComponent } from "react";
import NavBarComponent from "./NavBar.Component";
import { Route, Routes } from "react-router-dom";
import Category from "../router/Category";
export default class NavBarContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      navCategory: [],
      navItem: "",
    };
  }
  componentDidMount() {
    this.navData();
  }
  navData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ navCategory: data });
      });
  };
  handleNavChange = (e) => {
    console.log(e);

    this.setState({ navItem: e.target.innerHTML }
     
    );
  };

  render() {
    const { handleNavChange, navItem } = this.state;
    return (
      <div>
        <NavBarComponent
          navCategory={this.state.navCategory}
          handleNavChange={this.handleNavChange}
        />
        <div>
          <Routes>
            <Route path="/:navItem" element={<Category navItem={navItem} />} />
          </Routes>
        </div>
      </div>
    );
  }
}

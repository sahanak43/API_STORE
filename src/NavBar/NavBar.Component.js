import React, { PureComponent } from "react";
import Logo from "../../src/NavBar/Assests/main.svg";
import Whishlist from "../../src/NavBar/Assests/wishlist.svg";
import Profile from "../../src/NavBar/Assests/userprofile.svg";
import Search from "../../src/NavBar/Assests/search.svg";
import { Link } from "react-router-dom";
import "./NavBar.scss";
export default class NavBarComponent extends PureComponent {
  render() {
    const { navCategory, handleNavChange } = this.props;
    return (
      <div>
        <header>
          <div className="navbar">
            <div>
              <Link className="main1" to="/">
                <img
                  className="navbar-logos"
                  src={Logo}
                  alt="image"
                  height={60}
                />
              </Link>
            </div>

            <div className="search">
              <input
                type="search"
                className="search-searching"
                placeholder="Search Hermes Paris..."
              />
              <img
                src={Search}
                alt="image"
                className="search-image"
                height={25}
              />
            </div>
            <div className="icons">
              <div className="icons-profile">
                <img
                  src={Profile}
                  alt="profile"
                  height={30}
                  className="icons-inner"
                />
                Profile
              </div>
              <div className="icons-whishlist">
                <img
                  src={Whishlist}
                  alt="whishlist"
                  height={30}
                  className="icons-star"
                />
                whishlist
              </div>
            </div>
          </div>
        </header>
        <div className="main">
          <span className="main3">Category</span>
        </div>

    

        <div className="navbar-list">
          {navCategory.map((val, index) => 
            <div key={index} className="navbar-order">
           
              <Link className="navbar-link" onClick={handleNavChange} to={val} key={index}>
                {val}
              </Link>
            </div>
          )}
        </div>
     
      </div>
    );
  }
}


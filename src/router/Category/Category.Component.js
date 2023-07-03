import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./Category.scss";

//for sorting
export default class CategoryComponent extends PureComponent {
  render() {
    const { handleSortBy, categoryList, handleCategoryItem } = this.props;
    //const{navItem}=this.props;
    //console.log(navItem)
    console.log(categoryList);
    return (
      <>
        <div className="container">
          {/* sorting */}
          <div className="sortmain">
            {/* <label htmlFor="sort">Sort By:</label> */}
            <select id="sort" className="sorting" onChange={handleSortBy}>
              <option>SortBy</option>

              {/* <option value="default">Default</option> */}

              <option value="price-asc">Price-Low to High</option>
              <option value="price-desc">Price-High to Low</option>
            </select>
          </div>

          <div className="main">
            {categoryList.map((val, ind) => {
              return(
                 <div key={ind} className="contents">
                <ol key={ind}>
                  <Link to={`/${val.id}/${val.title}`}>
                    <img src={val.image} className="image" />
                    <h3 className="heading">{val.title}</h3>
                    <h4 className="price">Price: {val.price}/-</h4>
                  </Link>
                </ol>
                {/* <h2 className='number'>{val.id}</h2> */}
              </div>
              )
             
            })}
          </div>
        </div>
      </>
    );
  }
}



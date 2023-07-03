import React, { PureComponent } from "react";
import CategoryComponent from "./Category.Component";
// import { Link } from "react-router-dom";

class CategoryContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // categories: [],
      categoryList: [],
      selectedCategory: "",
      //  sortBy: "",
      bysort: "",
    };
  }
  componentDidMount() {
    this.fetchCategory();
  }
  componentDidUpdate(prevprops){
    console.log(prevprops)
    if(prevprops.navItem !==this.props.navItem){
      this.fetchCategory();
    }
  }
  // categoryItem = () => {
  //   const item = this.state.categories;
  //   console.log(item);

  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({ categories: data });
  //     });
  // };

  // handleCategoryClick=(e)=>{
  //   const selectedCategory=e.target.innerHTML;
  //   this.setState({selectedCategory:selectedCategory},()=>{
  //     this.fetchCategory();
  //   })
  // }

  fetchCategory=()=>{
    // let storeApi=this.state.selectedCategory;
    const {navItem}=this.props;
    console.log(navItem)
    fetch(`https://fakestoreapi.com/products/category/${navItem}`)
    .then(response=>response.json())
    .then(data=>{
      this.setState({categoryList:data})
    })
  }
  handleSortBy = (event) => {
    const bysort = event.target.value;
    this.setState({ bysort }, () => {
      this.sortProducts();
    });
  };
  sortProducts = () => {
    const { categoryList, bysort } = this.state;
    const sortData = [...categoryList];
    switch (bysort) {
      case "price-asc":
        sortData.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortData.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    this.setState({ categoryList: sortData });
  };
  handleCategoryItem=(e)=>{
    console.log(e.id);
  }


 

  render() {
    const { categoryList,} = this.state;
    const {navItem}=this.props;
    console.log(navItem);
    console.log(categoryList)

    return (
      <>
        <CategoryComponent
          // {...this.state}
          categoryList={categoryList}
          handleSortBy={this.handleSortBy}
          handleCategoryItem={this.handleCategoryItem}
          // handleCategoryClick={this.handleCategoryClick}

        />
      </>
    );
  }
}

export default CategoryContainer;

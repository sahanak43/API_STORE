import React, { PureComponent } from "react";
import ProductsComponent from "./Products.Component";
import { useNavigate, useParams } from "react-router-dom";

const Productrender = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return <ProductContainer navigate={navigate} params={params} {...props} />;
};

class ProductContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id);
    {
      this.fetchProducts();
    }
  }
  fetchProducts = () => {
    const { id } = this.props.params;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ productDetail: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    const { productDetail } = this.state;
    return (
      <>
        <ProductsComponent productDetail={productDetail} />
      </>
    );
  }
}
export default Productrender;

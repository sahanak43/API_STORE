import React ,{PureComponent} from "react";
import "./Products.scss";
 export default class ProductsComponent extends PureComponent {
  render() {
    const { productDetail } = this.props;

    return (
      
      <div className="products">
       
       
          <div >
          <img 
          className="products-img"
            src={productDetail.image}
            alt=""
           
          />
          </div>
          <div className="products-detail">
          <h3 className="products-title">{productDetail.title}</h3>
          <h4 className="products-price">Price: {productDetail.price}/-</h4>
          <h4 className='products-cate'>Category: {productDetail.category}</h4>
          </div>
        
      </div>
    );
  }
}

// export default ProductsComponent;

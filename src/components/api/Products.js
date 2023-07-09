import React, { Component } from "react";
import config from "../../config.json";
import ProductDetail from "./ProductDetail";
import "./Products.css";
import ProductAdd from "./ProductAdd";
const { SERVER_API } = config;

export class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: true,
      productId: null,
    };
  }

  getProducts = async () => {
    const response = await fetch(`${SERVER_API}/products?_order=desc&_sort=id`);
    if (response.ok) {
      const products = await response.json();
      this.setState({
        products: products,
        isLoading: false,
        showList: false,
      });
    }
  };

  handleClickProduct = (id) => {
    this.setState({
      productId: id,
      showList: false,
    });
  };

  handleBack = () => {
    this.setState({
      showList: true,
    });
  };

  handleAddSuccess = (status) => {
    if (status) {
      this.getProducts();
    }
  };

  componentDidMount = () => {
    this.getProducts();
  };

  render() {
    const { products, isLoading, productId, showList } = this.state;

    return (
      <div className="products">
        <ProductAdd onSuccess={this.handleAddSuccess} />
        {isLoading ? (
          <p>Loading...</p>
        ) : productId && !showList ? (
          <>
            <ProductDetail id={productId} />
            <button onClick={this.handleBack}>Quay lại</button>
          </>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                this.handleClickProduct(product.id);
              }}
              className="product-item"
            >
              <h3>{product.name}</h3>
              <p>Giá: {product.price}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Products;

import React, { Component } from "react";
import config from "../../config.json";

const { SERVER_API } = config;

export class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: true,
    };
  }

  getProducts = async () => {
    const response = await fetch(`${SERVER_API}/products`);
    if (response.ok) {
      const products = await response.json();
      this.setState({
        products: products,
        isLoading: false,
      });
    }
  };

  componentDidMount = () => {
    this.getProducts();
  };

  render() {
    const { products, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => <h3 key={product.id}>{product.name}</h3>)
        )}
      </div>
    );
  }
}

export default Products;

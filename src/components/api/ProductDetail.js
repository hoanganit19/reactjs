import React, { Component } from "react";
import config from "../../config.json";
const { SERVER_API } = config;

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  getProduct = async (id) => {
    const response = await fetch(`${SERVER_API}/products/${id}`);
    if (response.ok) {
      const product = await response.json();
      this.setState({
        product: product,
      });
    }
  };

  componentDidMount = () => {
    const { id } = this.props;
    this.getProduct(id);
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1>{product.name}</h1>
        <h3>Giá: {product.price}</h3>
      </div>
    );
  }
}

export default ProductDetail;

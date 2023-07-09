import React, { Component } from "react";
import config from "../../config.json";
const { SERVER_API } = config;
export class ProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        price: 0,
      },
    };
  }

  handleChange = (e) => {
    const data = { ...this.state.form };

    data[e.target.name] = e.target.value;
    this.setState({
      form: data,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, price } = this.state.form;

    this.postProduct({ name, price });
  };

  postProduct = async (data) => {
    const response = await fetch(`${SERVER_API}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      this.props.onSuccess(true);
      alert("Thêm sản phẩm thành công");
      this.setState({
        form: {
          name: "",
          price: 0,
        },
      });
    }
  };

  render() {
    const { name, price } = this.state.form;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Tên sản phẩm</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tên sản phẩm..."
              required
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="price">Giá sản phẩm</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Giá sản phẩm..."
              min={0}
              required
              onChange={this.handleChange}
              value={price}
            />
          </div>
          <button type="submit">Thêm</button>
        </form>
      </div>
    );
  }
}

export default ProductAdd;

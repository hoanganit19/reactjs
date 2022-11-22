import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: "",
      },
      errors: {},
    };
  }

  handleChangeValue = (e) => {
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;

    this.setState({
      form: data,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state.form;

    const errors = {}; //Lưu trữ các lỗi

    if (typeof email === "string" && email.trim() === "") {
      errors.email = "Email không được để trống";
    }

    if (typeof password === "string" && password.trim() === "") {
      errors.password = "Mật khẩu không được để trống";
    }

    this.setState({
      errors: errors,
    });

    if (Object.keys(errors).length == 0) {
      this.setState({
        form: {
          email: "",
          password: "",
        },
      });
    }
  };

  render() {
    const { form, errors } = this.state;
    const { email, password } = form;

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-6">
            {Object.keys(errors).length > 0 && (
              <div className="alert alert-danger text-center">
                Vui lòng kiểm tra lại dữ liệu
              </div>
            )}
            <form onSubmit={this.handleSubmitForm}>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email..."
                  onChange={this.handleChangeValue}
                  value={email}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Mật khẩu..."
                  onChange={this.handleChangeValue}
                  value={password}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

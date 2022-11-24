import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Validate from "./Validate.";

const validate = new Validate();

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: "",
      },
      errors: {},
      isValidate: null,
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

    /*
      errors.fieldName.rule = message
    */

    const rules = {
      email: "required|email",
      password: "required|min:9|max:12",
    };

    const messages = {
      "email.required": "Email bắt buộc phải nhập",
      "email.email": "Email không đúng định dạng",
      "password.required": "Mật khẩu bắt buộc phải nhập",
      "password.min": "Mật khẩu không được nhỏ hơn :min ký tự",
      "password.max": "Mật khẩu không được lớn hơn :max ký tự",
    };

    const isValidate = validate.run(rules, messages);

    this.setState({
      isValidate: isValidate,
    });

    // if (typeof email === "string" && email.trim() === "") {
    //   errors.email = "Email không được để trống";
    // }

    // if (typeof password === "string" && password.trim() === "") {
    //   errors.password = "Mật khẩu không được để trống";
    // }

    // this.setState({
    //   errors: errors,
    // });

    // if (Object.keys(errors).length == 0) {
    //   this.setState({
    //     form: {
    //       email: "",
    //       password: "",
    //     },
    //   });
    // }
  };

  render() {
    const { form, isValidate } = this.state;
    const { email, password } = form;

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-6">
            {isValidate !== null && isValidate === false && (
              <div className="alert alert-danger text-center">
                Vui lòng kiểm tra lại dữ liệu
              </div>
            )}
            <form onSubmit={this.handleSubmitForm}>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={`form-control ${
                    validate.getError("email") ? "is-invalid" : ""
                  }`}
                  placeholder="Email..."
                  onChange={this.handleChangeValue}
                  value={email}
                />
                {validate.getError("email") && (
                  <div className="invalid-feedback">
                    {validate.getError("email")}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control ${
                    validate.getError("password") ? "is-invalid" : ""
                  }`}
                  placeholder="Mật khẩu..."
                  onChange={this.handleChangeValue}
                  value={password}
                />
                {validate.getError("password") && (
                  <div className="invalid-feedback">
                    {validate.getError("password")}
                  </div>
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

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
        confirm_password: "",
        phone: "",
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
      confirm_password: "required|same:password",
      phone: "required|regex:" + /^0\d{9}$/,
    };

    const messages = {
      "email.required": "Email bắt buộc phải nhập",
      "email.email": "Email không đúng định dạng",
      "password.required": "Mật khẩu bắt buộc phải nhập",
      "password.min": "Mật khẩu không được nhỏ hơn :min ký tự",
      "password.max": "Mật khẩu không được lớn hơn :max ký tự",
      "confirm_password.required": "Xác nhận mật khẩu không được để trống",
      "confirm_password.same": "Xác nhận mật khẩu phải giống với mật khẩu",
      "phone.required": "Điện thoại không được để trống",
      "phone.regex": "Điện thoại không đúng định dạng",
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
    const { email, password, confirm_password, phone } = form;

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
              <div className="mb-3">
                <label htmlFor="password">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className={`form-control ${
                    validate.getError("confirm_password") ? "is-invalid" : ""
                  }`}
                  placeholder="Xác nhận mật khẩu..."
                  onChange={this.handleChangeValue}
                  value={confirm_password}
                />
                {validate.getError("confirm_password") && (
                  <div className="invalid-feedback">
                    {validate.getError("confirm_password")}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Điện thoại</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className={`form-control ${
                    validate.getError("phone") ? "is-invalid" : ""
                  }`}
                  placeholder="Điện thoại..."
                  onChange={this.handleChangeValue}
                  value={phone}
                />
                {validate.getError("phone") && (
                  <div className="invalid-feedback">
                    {validate.getError("phone")}
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

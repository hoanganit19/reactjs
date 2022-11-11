import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Form extends Component {

  constructor(){
    super();
    this.state = {
        form: {
            email: '',
            password: ''
        }
    }
  }  

  handleChangeValue = (e) => {
    const data = {...this.state.form};
    data[e.target.name] = e.target.value;

    this.setState({
        form: data
    })
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const {email, password} = this.state.form;
    console.log(email, password);
  }

  render() {
    const {form} = this.state;
   
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={this.handleSubmitForm}>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Email..."
                  onChange={this.handleChangeValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Mật khẩu..."
                  onChange={this.handleChangeValue}
                />
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

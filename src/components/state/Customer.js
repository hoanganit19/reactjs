import React, { Component } from 'react'

export class Customer extends Component {

  constructor(props){
    super(props);

    //Khai báo state, thiết lập giá trị mặc định
    this.state = {
        info: props.info
    }
  }  

  changeInfo = () => {
    
     //Thay đổi giá trị state   
     this.setState({
        info: {
            name: 'Hoàng An Unicode',
            email: 'contact@unicode.vn'
        }
     });
  }

  resetInfo = () => {
    this.setState({
        info: this.props.info
     });
  }

  render() {

    console.log('render');

    const {name, email} = this.state.info;

    return (
      <div>
        <h2>Tên: {name}</h2>
        <h2>Email: {email}</h2>
        <button type={'button'} onClick={this.changeInfo}>Change Info</button>
        <button type={'button'} onClick={this.resetInfo}>Reset Info</button>
      </div>
    )
  }
}

export default Customer
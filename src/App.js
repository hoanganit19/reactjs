import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React from 'react';

function App() {

  /*
  1. Render có điều kiện
  - Dùng câu lệnh if thông thường
  - Dùng toán tử 3 ngôi
  2. Render với vòng lặp (map)
  */

  const products = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      price: 12000
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      price: 13000
    },
    {
      id: 3,
      name: 'Sản phẩm 3',
      price: 14000
    },

    {
      id: 4,
      name: 'Sản phẩm 4',
      price: 15000
    }
  ];

  const productLists = products.map((item, index)=>{
    return (
      <div key={index}>
        <p>ID: {item.id}</p>
        <p>Tên: {item.name}</p>
        <p>Giá: {item.price}</p>
        <hr/>
      </div>
    )
  });

    return(
      <>
        <h2>Danh sách sản phẩm</h2>
        {productLists}
      </>
    )
}

export default App;

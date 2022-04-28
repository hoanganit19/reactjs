import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React from 'react';

function App() {

  // const element = React.createElement(
  //     'div', 
  //     {}, 
  //     React.createElement(
  //       'div',
  //       {className: 'block'},
  //       React.createElement(
  //         'h2',
  //         {
  //           className: 'sub-title',
  //           id: 'sub-title'
  //         },
  //         'Khoá học ReactJS'
  //       ),
    
  //       React.createElement(
  //         'h1',
  //         {
  //           className: 'title',
  //           id: 'title'
  //         },
  //         'Unicode Academy'
  //       ),
    
  //       React.createElement(
  //         'p',
  //         {
  //           className: 'text'
  //         },
  //         React.createElement(
  //           'a',
  //           {
  //             href: 'https://unicode.vn',
  //             target: '_blank',
  //             className: 'text--link',
  //             title: 'Đăng ký khoá học'
  //           },
  //           'Đăng ký ngay'
  //         )
  //       )
  //     ),
  //     React.createElement(
  //       'div',
  //       {
  //         className: 'element'
  //       },
  //       'Khoá học lập trình tại Unicode'
  //     )
  //   );

  const firstProvince = 1;

  const styleElement = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '1.5rem'
  };

  const myAlert = ()=>{
    alert('Unicode Academy');
  }

  const welcomeContent = `Khoá học lập trình tại Unicode`;

  return (
    <div>
      <div className='block'>
          <h2 className='sub-title' id='sub-title'>Khoá học ReactJS</h2>
          <h1 className='title' id='title'>Unicode Academy</h1>
          <p className='text'>
            <a href='https://unicode.vn' className='text--link' target="_blank" title='Đăng ký khoá học'>Đăng ký ngay</a>
          </p>
      </div>
      <div className='element' onClick={myAlert} style={styleElement}>
        {welcomeContent}
      </div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" defaultValue="hoangan.web" />
      <div>
        <select>
          <option value="0">Chọn Tỉnh/Thành phố</option>
          <option value={firstProvince}>Hà Nội</option>
        </select>
      </div>

      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>Enter your HTML here</p>
    </div>
  );
}

export default App;

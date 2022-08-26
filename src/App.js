import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Member from "./components/Member";
import Comment from "./components/Comment";
import Event01 from "./components/events/Event01";
import Event02 from "./components/events/Event02";
import Component01 from "./components/context/Component01";

function App() {
  const info = {
    name: "Hoàng An",
    age: 30,
    shippingAddress: "Hà Nội",
  };

  const comment = {
    title: "Tiêu đề comment 01",
    content: "Nội dung comment 01",
  };

  const members = [
    {
      name: "Hoàng An",
      age: 30,
      shippingAddress: "Hà Nội",
      comment: {
        title: "Comment user 01",
        content: "Content comment user 01",
      },
      posts: [
        {
          title: 'Post 01',
          content: 'Content 01'
        },

        {
          title: 'Post 02',
          content: 'Content 02'
        },

        {
          title: 'Post 03',
          content: 'Content 03'
        }
      ]
    },

    {
      name: "Nguyễn Văn A",
      age: 25,
      shippingAddress: "Đà Nẵng",
      comment: {
        title: "Comment user 02",
        content: "Content comment user 02",
      },
      posts: [
        {
          title: 'Post 01',
          content: 'Content 01'
        },

        {
          title: 'Post 02',
          content: 'Content 02'
        },

        {
          title: 'Post 03',
          content: 'Content 03'
        }
      ]
    },

    {
      name: "Nguyễn Văn B",
      age: 35,
      shippingAddress: "Hồ Chí Minh",
      comment: {
        title: "Comment user 03",
        content: "Content comment user 03",
      },
      posts: [
        {
          title: 'Post 01',
          content: 'Content 01'
        },

        {
          title: 'Post 02',
          content: 'Content 02'
        },

        {
          title: 'Post 03',
          content: 'Content 03'
        }
      ]
    },
  ];

  const memberLists = members.map((item, index) => {
    return (
      <Member
        key={index}
        name={item.name}
        age={item.age}
        shippingAddress={item.shippingAddress}
        comment={
          <Comment title={item.comment.title} content={item.comment.content} />
        }
        posts = {item.posts}
      ></Member>
    );
  });

  return (
    <>
      <Component01 />
    </>
  );
}

export default App;

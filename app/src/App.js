import React, { useState } from 'react';
import './App.css';
import Home from './Container/Home';
import Details from './Container/Details';
import Header from './Components/Header';
import Layout from './Layout';

export default function App() {
  const [router, setRouter] = useState({key: "home", props: {}});
  const container = [
    { key: "home", name: "Home", component: <Home setRouter={setRouter} />, showInNav: true },
    { key: "details", name: "Details", component: <Details dataRouter={router.props} />, showInNav: false }
  ]

  // console.log(router);
  
  
  return (
    <>
      <Header container={container} router={router} setRouter={setRouter} />
      <Layout container={container} router={router} />
    </>
  )
}

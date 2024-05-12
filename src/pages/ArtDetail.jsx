import React, { useState } from 'react';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Recommend from '../components/Artist/Recommend';

export default function ArtDetail() {
  return <div>
    <Header />
    <div className='artDetail'>
      <li>
      </li>
    </div>
    <Recommend />
    <Footer />
  </div>;
}

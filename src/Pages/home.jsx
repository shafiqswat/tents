/** @format */

import React from "react";
import styled from "styled-components";
import Slider from "../Components/layout/slider";
import CardComponent from "../Components/layout/Card";
import data from "../Components/assets/cardItem";
import BreadCrumb from "../Components/BreadCrumb";

function Home() {
  return (
    <div>
      {/* <BreadCrumb /> */}
      <Slider />
      <WhatsappImages>
        <div className='ads-show'>
          <div>
            <a href='https://wa.me/966500173090'>
              <img
                src='/images/whatsappImage1.gif'
                alt='whatsappGif'
              />
            </a>
          </div>
        </div>
        <div className='ads-show'>
          <a
            href='https://wa.me/966500173090'
            target='_blank'>
            <img
              src='/images/whatsappImage2.gif'
              alt='WhatsappGif'
            />
          </a>
        </div>
      </WhatsappImages>
      {data.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}

export default Home;

const WhatsappImages = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  img {
    cursor: pointer;
  }
  .ads-show {
    padding: 10px;
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0px 0px 2px #969696;
  }
`;

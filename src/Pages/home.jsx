/** @format */
/** @format */

import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "../Components/layout/slider";
import CardComponent from "../Components/layout/Card";
import data from "../Components/assets/cardItem";
import BreadCrumb from "../Components/BreadCrumb";

function Home() {
  // Setting the document title and meta description for SEO
  useEffect(() => {
    document.title = "مدينةالخيام المظلات"; // Title in Arabic
    const metaDescription = document.createElement("meta");
    metaDescription.name = "مظلات وسواتر القصيم";
    metaDescription.content =
      " للحدائق والأسطح والسيارات بخامات عالية جودة وبأفضل الخامات المستوردة   والمحلية، كما يوجد قماش بي في دي اف بتصاميم وأشكال حديثة وجديدة للأسطح   والحدائق، عليكم بالتواصل مع شركة حاتم للمقاولات لتركيب وتصميم وتنفيذ   أفضل وأجمل مظلات وسواتر، مظلات قماش للسيارات بأرقى وأجمل التصاميم  والأشكال الجذابة والرائعة. ";
    document.head.appendChild(metaDescription);
  }, []);
  return (
    <main>
      <h1 style={{ display: "none" }}>
        مظلات وسواتر القصيم
        <strong>
          للحدائق والأسطح والسيارات بخامات عالية جودة وبأفضل الخامات المستوردة
          والمحلية، كما يوجد قماش بي في دي اف بتصاميم وأشكال حديثة وجديدة للأسطح
          والحدائق، عليكم بالتواصل مع شركة حاتم للمقاولات لتركيب وتصميم وتنفيذ
          أفضل وأجمل مظلات وسواتر، مظلات قماش للسيارات بأرقى وأجمل التصاميم
          والأشكال الجذابة والرائعة.
        </strong>
        <strong>
          مدينة الخيام المظلات تفصيل خيام ملكي مظلات سواتر موقف سيارت مظلات
          مدارس القصيم بريده عنيزه
        </strong>
      </h1>
      {/* <BreadCrumb /> */}
      <Slider />
      <WhatsappImages>
        <div className='ads-show'>
          <div>
            <a href='https://wa.me/966500173090'>
              <img
                src='/images/whatsappImage1.gif'
                alt='whatsappImage1'
              />
            </a>
          </div>
        </div>
        <div className='ads-show'>
          <a
            href='https://wa.me/966500173090'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            {/* Added rel for security */}
            <img
              src='/images/whatsappImage2.gif'
              alt='whatsappImage2'
            />
          </a>
        </div>
      </WhatsappImages>
      <h1 style={{ display: "none" }}>الصفحة الرئيسية - متجرنا</h1>{" "}
      {/* Hidden heading for SEO */}
      {data.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </main>
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

/** @format */
/** @format */

import React, { useEffect } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import sayaaratItem from "../Components/assets/Sayaarat";
import CardComponent from "../Components/layout/Card";

function Sayaarat() {
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
      <BreadCrumb />
      {sayaaratItem.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </main>
  );
}

export default Sayaarat;

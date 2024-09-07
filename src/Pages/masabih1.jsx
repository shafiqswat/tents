/** @format */
/** @format */

import React, { useEffect } from "react";
import masabih1Item from "../Components/assets/Masabih1";
import CardComponent from "../Components/layout/Card";

function Masabih1() {
  // Setting the document title and meta description for SEO
  useEffect(() => {
    document.title = "المصابيح 1 - متجرنا"; // Title in Arabic
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "استعرض مجموعة متنوعة من المصابيح 1 المتاحة في متجرنا.";
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
      {masabih1Item.map((item, index) => (
        <CardComponent
          key={index}
          item={item}
        />
      ))}
    </main>
  );
}

export default Masabih1;

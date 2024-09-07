/** @format */

import React, { useEffect } from "react";
import almazidItem from "../Components/assets/Almazid";
import CardComponent from "../Components/layout/Card";

function Almazid() {
  // Setting the document title for SEO
  useEffect(() => {
    document.title =
      "مدينة الخيام المظلات تفصيل خيام ملكي مظلات سواتر موقف سيارت مظلات مدارس القصيم بريده عنيزه";
  }, []);

  return (
    <main>
      <h1 style={{ display: "none" }}>
        مظلات وسواتر القصيم{" "}
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
      {/* Heading for SEO, hidden visually */}
      <div>
        {almazidItem.map((item, index) => (
          <CardComponent
            key={item.id || index} // Use unique id if available
            item={item}
          />
        ))}
      </div>
    </main>
  );
}

export default Almazid;

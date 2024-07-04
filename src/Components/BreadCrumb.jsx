/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// Mapping of path segments to Arabic values
const pathToArabicMap = {
  "": "الرئيسية",
  alriyad: "مظلات الرياض",
  sayaarat: "مظلات سيارات",
  hadayiq: "مظلات حدائق",
  masabih: "مظلات مسابح",
  madakhil: " مظلات مداخل",
  likasan: "مظلات لكسان",
  madaris: "مظلات مدارس",
  aswaq: "مظلات اسواق",
  masajid: "مظلات مساجد",
  qumash: "مظلات قماش pvc",
  shinku: "مظلات شينكو",
  sawatiralriyad: "سواتر الرياض",
  hadid: "سواتر حديد",
  qumash1: "سواتر قماش",
  bilastik: "سواتر بلاستيك",
  likasan1: "سواتر لكسان",
  masabih1: "سواتر مسابح",
  hanajiralriyad: "هناجر الرياض",
  jalasatwaburjulat: "مظلات جلسات وبرجولات",
  shubukalriyad: "شبوك الرياض",
  biutshaer: "بيوت شعر",
  almazid: "المزيد",
  manatiqalsueudia: "مظلات مناطق السعودية",
  aitasilbina: "اتصل بنا ",
  wasawatirfialriyad: "مظلات وسواتر في الرياض",
};

function BreadCrumb() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    const breadcrumbPaths = paths.map((path, index) => ({
      name: pathToArabicMap[path] || decodeURIComponent(path),
      href: "/" + paths.slice(0, index + 1).join("/"),
    }));
    setBreadcrumbs(breadcrumbPaths);
  }, [location]);

  return (
    <BreadcrumbContainer>
      <BreadcrumbItem href='/'>{pathToArabicMap[""]}</BreadcrumbItem>
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem
            href={crumb.href}
            className={index === breadcrumbs.length - 1 ? "active" : ""}>
            {crumb.name}
          </BreadcrumbItem>
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
}

export default BreadCrumb;

const BreadcrumbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1em;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;

const BreadcrumbItem = styled.a`
  text-decoration: none;
  color: #8e003b;
  font-weight: 700;
  transition: color 0.3s;
  font-family: Arial, Helvetica, sans-serif !important;

  &:hover {
    color: #d03e2f;
  }

  &.active {
    color: #333;
    cursor: default;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 10px;
  color: #aaa;

  @media (max-width: 768px) {
    margin: 0 5px;
  }
`;

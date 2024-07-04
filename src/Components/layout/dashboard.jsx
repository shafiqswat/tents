/** @format */

import React from "react";
import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";
import BreadCrumb from "../BreadCrumb";
import Ticker from "../Ticker";
import { useLocation } from "react-router-dom";

function Dashboard({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const showBreadCrumb = currentPath !== "/";

  return (
    <DashboardContainer>
      <Header />
      <div id='center'>
        {showBreadCrumb && <BreadCrumb currentPath={currentPath} />}
        {children}
      </div>
      <Ticker />
      <Footer />
    </DashboardContainer>
  );
}

export default Dashboard;

const DashboardContainer = styled.div`
  overflow: hidden;
  background-color: #f0f0f0;
`;

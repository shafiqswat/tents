/** @format */

import React from "react";
import styled from "styled-components";
import { Card } from "antd";

function CardComponent({ item }) {
  const currentUrl = window.location.href;
  const textToShare = encodeURIComponent(item.cardTitle);
  const urlToShare = encodeURIComponent(currentUrl);

  return (
    <CardContainer>
      <div className='cardContent'>
        <div className='imageWrapper'>
          <img
            src={item.cardImage}
            alt='cardImage'
          />
        </div>
        <div className='cardTitle'>
          <span>{item.cardSpan}</span>
        </div>
        <div className='titleContent'>
          <div className='titleIcon'>
            <div className='titleShare typcn typcn-export-outline'></div>
            <div className='dropDownContent'>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`}
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='facebook'
                  className='socialicon socialicon-facebook'
                />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${urlToShare}&text=${textToShare}`}
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='twitter'
                  className='socialicon socialicon-twitter'
                />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare}`}
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='linkedin'
                  className='socialicon socialicon-linkedin'
                />
              </a>
              <a
                href={`https://www.instagram.com/?url=${urlToShare}`}
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjwAsAAB4AAdpxxYoAAAAASUVORK5CYII='
                  alt='instagram'
                  className='socialicon socialicon-instagram'
                />
              </a>
            </div>
          </div>
          <div className='title'>
            <a href='#'>
              <h2>{item.cardTitle}</h2>
            </a>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default CardComponent;

const CardContainer = styled.div`
  cursor: pointer;
  width: 100%;

  .cardContent {
    max-width: 97%;
    margin: 0 0 3% 0;
    height: 97%;
    background: #ffffff !important;
    box-shadow: 0px 0px 5px #969696;
    line-height: 1.4;
    transition: box-shadow 0.5s;
  }

  .imageWrapper {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 200px;
      vertical-align: bottom;
      transition: transform 0.5s ease, opacity 0.5s ease;
      object-fit: cover;
    }
  }

  .cardTitle {
    padding: 10px 1.5% 10px 1.5%;
    height: 40px;
    z-index: 3;
    position: relative;
    color: #fff;
    margin-top: -40px;
    background: rgba(0, 0, 0, 0.5);

    span {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 80%;
    }
  }

  .titleContent {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;

    .titleIcon {
      font-size: 1.5em;
      position: relative;
      padding: 0 5px;
      opacity: 0.9;
      z-index: 5;
      text-align: center;
      height: 40px;
      margin-top: -60px;

      .titleShare {
        cursor: pointer;
        margin: 0;
        color: #fff;
        text-shadow: 1px 1px #000;
        margin-top: 1em;
        ::before {
          font-family: "typicons";
          font-style: normal;
          font-weight: normal;
          speak: none;
          display: inline-block;
          text-decoration: inherit;
          width: 1em;
          height: 1em;
          font-size: 1em;
          text-align: center;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
      }

      &:hover .dropDownContent,
      .dropDownContent:hover {
        visibility: visible;
        opacity: 1;
      }

      .dropDownContent {
        width: 50px;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 60px;
        right: -7px;
        background-color: #f0f0f0;
        border: 1px #969696 solid;
        border-radius: 6px;
        transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
        display: flex;
        flex-direction: column;

        .socialicon {
          height: 32px;
          width: 32px;
          margin: 5px 5px;
          transition: transform 0.6s ease-in-out;
          display: block;
        }

        .socialicon:hover {
          transform: rotate(360deg);
        }

        .socialicon-facebook {
          background-position: 0 -224px;
        }

        .socialicon-twitter {
          background-position: 0 -96px;
        }

        .socialicon-linkedin {
          background-position: 0 -32px;
        }

        .socialicon-instagram {
          background-position: 0 0;
        }
      }
    }

    .title {
      color: #000000;
      padding: 10px;
      height: 60px;
      text-align: justify;

      h2 {
        padding: 0;
        margin: 0;
        font-size: inherit;
      }
    }
  }

  :hover .imageWrapper img {
    transform: scale(1.1);
  }

  @media (min-width: 900px) {
    width: 33.3%;
    display: inline-grid;
  }

  @media (max-width: 900px) and (min-width: 601px) {
    width: 50%;
    display: inline-grid;
  }

  @media (max-width: 600px) {
    .cardContent {
      max-width: 100%;
    }
  }
`;

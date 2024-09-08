/** @format */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import aggregatedData from "../Components/assets/assetsData"; // Ensure you import your data

const ProductDetailsPage = () => {
  const { id } = useParams(); // Assume each product has a unique ID in the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Log the id and aggregated data for debugging
    console.log("Product ID from URL:", id);
    console.log("Aggregated Data:", aggregatedData);

    // Convert id to string if necessary and find the product
    const foundProduct = aggregatedData.find(
      (item) => item.id.toString() === id
    );
    setProduct(foundProduct);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return (
      <p>Product not found. Please check the URL or return to the homepage.</p>
    );
  }

  // SEO content
  document.title = `${product.cardTitle} | مدينة الخيام المظلات`;
  document
    .querySelector('meta[name="description"]')
    .setAttribute(
      "content",
      `Explore ${product.cardTitle} at مدينة الخيام المظلات. Discover high-quality tents, shades, and carports tailored for your needs. Call us at 0500173090 for custom solutions.`
    );

  return (
    <ProductContainer>
      <div className='productImage'>
        <img
          src={product.cardImage}
          alt={product.cardTitle}
        />
      </div>
      <div className='productInfo'>
        <h1>{product.cardTitle}</h1>
        <p className='arabic'>{product.cardDescriptionArabic}</p>
        <p>{product.cardDescription}</p>
        <button className='buyButton'>اشتري الآن</button>{" "}
        {/* "Buy Now" in Arabic */}
      </div>
    </ProductContainer>
  );
};

export default ProductDetailsPage;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  .productImage {
    img {
      width: 100%;
      max-width: 800px;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .productInfo {
    text-align: center;
    margin-top: 30px;

    h1 {
      font-size: 2.5em;
      color: #222;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2em;
      color: #555;
      line-height: 1.6;
    }

    .arabic {
      font-family: "Arial", sans-serif;
      font-size: 1.2em;
      color: #333;
      margin: 15px 0;
    }

    .buyButton {
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 12px 25px;
      cursor: pointer;
      font-size: 1.1em;
      margin-top: 20px;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &:hover {
        background-color: #218838;
        transform: scale(1.05);
      }
    }
  }
`;

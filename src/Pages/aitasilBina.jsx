/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Styled components...

const FormContainer = styled.div`
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  direction: rtl;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

function AitasilBina() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactType: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/send-email`, formData)
      .then((response) => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        alert("Error sending email: " + error.message);
      });
  };

  return (
    <FormContainer>
      <FormTitle>اتصل بنا</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='contactType'>جهة الإتصال</Label>
          <Select
            id='contactType'
            name='contactType'
            required
            onChange={handleChange}>
            <option value=''>اختر جهة الاتصال</option>
            <option value='sales'>المبيعات</option>
            <option value='support'>الدعم</option>
            <option value='general'>عام</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='name'>اسمك</Label>
          <Input
            type='text'
            id='name'
            name='name'
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>بريدك الإلكتروني</Label>
          <Input
            type='email'
            id='email'
            name='email'
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='subject'>عنوان الرسالة</Label>
          <Input
            type='text'
            id='subject'
            name='subject'
            required
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='message'>الرسالة</Label>
          <Textarea
            id='message'
            name='message'
            rows='5'
            required
            onChange={handleChange}></Textarea>
        </FormGroup>
        <SubmitButton type='submit'>أرسل</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default AitasilBina;

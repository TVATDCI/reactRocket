// forgot password component

import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  max-width: 600px;
  padding: 30px;
  margin: 100px auto 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #000, #333);
  text-align: center;

  @media (max-width: 760px) {
    max-width: 85%;
    padding: 20px;
    margin: 70px auto;
  }

  @media (max-width: 375px) {
    max-width: 90%;
    padding: 18px;
    margin: 70px auto;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;

  &:hover {
    background-color: #edc561;
    color: rgb(237, 197, 97);
    font-weight: bold;
  }

  @media (max-width: 760px) {
    font-size: 15px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: rgb(237, 197, 97);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: white;
    color: rgb(237, 197, 97);
    font-weight: bold;
  }

  @media (max-width: 760px) {
    font-size: 15px;
    padding: 10px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const H2 = styled.h2`
  color: #edc561;
`;

const P = styled.p`
  color: red;
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");

    console.log("Sending password reset link to:", email);
  };

  return (
    <Wrapper>
      <H2>Forgot Password</H2>
      <P>Enter your email to receive a password reset link.</P>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Send Reset Link</Button>
        </FormWrapper>
      </form>
    </Wrapper>
  );
};

export default ForgotPassword;

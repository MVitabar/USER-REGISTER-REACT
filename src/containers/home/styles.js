import styled from "styled-components";
import Background from "../../assets/bg_image.svg";

export const Container = styled.div`
  color: white;
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 100%;
  min-height: 100vh;
  
`;

export const Img = styled.img`
  margin-top: 30px;
`;



export const InputLabel = styled.p`
  margin-top: 30px;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 342px;
  height: 45px;
  background: rgba(255, 255, 255, 0.25);
  outline: none;
  padding: 15px 20px 15px 25px;
  border-radius: 14px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 28.13px;
  text-align: left;
  color: white;
`;


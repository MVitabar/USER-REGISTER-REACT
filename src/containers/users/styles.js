import styled from "styled-components";
import Background from "../../assets/bg_image1.svg";

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
 
`

export const Img = styled.img`
  margin-top: 30px;
`;


export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 342px;
  height: 45px;
  background: rgba(255, 255, 255, 0.25);
  outline: none;
  padding: 15px;
  border-radius: 14px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 20px;
  font-weight: 400;
  line-height: 28.13px;
  margin-top: 15px;
  color: white;

  button {
    background-color: transparent;
    border:none;
    cursor:pointer;

    &:hover {
    opacity: 0.6;
    transition: 0.3s ease-in-out;
  }
  &:active {
    opacity: 0.4;
  }

  }
`;

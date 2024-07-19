import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  width: 250px;
  height: 60px;
  border-radius: 14px;
  gap: 20px;
  margin-top: 120px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
    transition: 0.3s ease-in-out;
  }
  &:active {
    opacity: 0.4;
  }

  ${(props) =>
    props.transparent &&
    `
    background-color: transparent;
    border:1px solid white;
  `}
`;

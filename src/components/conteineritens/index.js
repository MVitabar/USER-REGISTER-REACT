import React from "react";
import { ContainerItens as Itens } from "./styles";

function ContainerItens({ children, isBlur }) {
  return <Itens isBlur={isBlur}>{children}</Itens>;
}

export default ContainerItens;

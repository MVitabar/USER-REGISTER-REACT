import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import People from "../../assets/people.svg";
import Arrow from "../../assets/right-arrow.svg";
import H1 from "../../components/title";
import ContainerItens from "../../components/conteineritens";
import Button from "../../components/button";

import { Container, Img, InputLabel, Input } from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
    history.push("/users");
  }
  return (
    <Container>
      <Img src={People} />

      <ContainerItens>
        <H1>HELLO!</H1>

        <InputLabel>NAME</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>AGE</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}>
          SIGN IN <img src={Arrow} alt="forward arrow" />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;

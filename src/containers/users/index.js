import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Avatar from "../../assets/User Profile_Monochromatic 2.svg";
import Arrow from "../../assets/arrow-back.svg";
import Trash from "../../assets/trash.png";
import H1 from "../../components/title";
import ContainerItens from "../../components/conteineritens";
import Button from "../../components/button"

import { Container, Img, User } from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }
    fetchUsers();
  }, [users]);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Img src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1>USERS</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash can" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage} transparent={true}>
          <img src={Arrow} alt="back arrow" />
          BACK
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;

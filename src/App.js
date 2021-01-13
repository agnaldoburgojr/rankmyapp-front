import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, CharacterList, Card, Avatar, Name } from "./styles";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3334")
      .then(({ data }) => setCharacters(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <CharacterList>
        {characters.map((character) => (
          <Card key={character.id}>
            <Avatar src={character.image} alt={character.name} />
            <Name>{character.name}</Name>
          </Card>
        ))}
      </CharacterList>
    </Container>
  );
};

export default App;

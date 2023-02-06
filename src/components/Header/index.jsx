import { useContext, useState } from "react";
import { GithubContext } from "../../context/GithubContext";

import { Button, Container, Content, Input, InputWrapper, SearchIcon, ShadowLeft, ShadowMid, ShadowRight, Title } from "./styles";

export function Header() {

  const { getUser } = useContext(GithubContext);
  const [user, setUser] = useState('')

  async function submitUser(user) {
    await getUser(user)
  }

  return (
    <Container>
      <ShadowRight />
      <ShadowLeft />
      <ShadowMid />

      <Content>
        <Title>Github Search</Title>
        <InputWrapper>
          <Input placeholder="Digite aqui o nome de usuário do Github..." onChange={(e) => { setUser(e.target.value), console.log(user) }} />
          <Button onClick={() => { submitUser(user) }}>
            <SearchIcon src="./search.svg" />
          </Button>
        </InputWrapper>
      </Content>
    </Container>
  )
}
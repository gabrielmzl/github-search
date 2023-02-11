import { Book, Users } from "phosphor-react";
import { Avatar, Container, Profile, ProfileInfo } from "./styles";

export function UserProfile({ avatar, name, login, bio, blog, followers, public_repos}) {
  return (
    <Container>
      <Avatar src={avatar} />

      <Profile>
        <span>
          <h1>{name}</h1>
          <p>{bio}</p>
          <span><a href={blog} target="_blank">{blog}</a></span>
        </span>

        <ProfileInfo>
          <span><Users size={22} weight="light" /> {followers} seguidores</span>
          <span><Book size={22} weight="light" /> {public_repos} repositórios</span>
        </ProfileInfo>
      </Profile>
    </Container>
  )
}
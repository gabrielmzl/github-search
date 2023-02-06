import { Star } from "phosphor-react";
import { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";
import { UserProfile } from "../UserProfile";
import { Container, Repo, RepoList, Repositories } from "./styles";

export function User() {

  const { user, repos } = useContext(GithubContext);

  return (
    <Container>
      <UserProfile avatar={user.avatar_url} name={user.name} bio={user.bio} blog={user.blog} followers={user.followers} public_repos={user.public_repos} />

      <Repositories>
        <span>
          <h1>Repositórios</h1>
          <p>{user.public_repos} repositórios</p>
        </span>

        <RepoList>
          {repos.map(repo => (
            <a href={repo.html_url} target="_blank">
              <Repo>
                <span>
                  <h1>{repo.name}</h1>
                  <span><Star size={16} weight="light" /> {repo.stargazers_count}</span>
                </span>
                <p>{repo.description}</p>
              </Repo>
            </a>
          ))}
        </RepoList>
      </Repositories>
    </Container>
  )
}
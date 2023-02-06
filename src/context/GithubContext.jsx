import { createContext } from "react";
import useVideo from "./../hooks/useGithub";

const GithubContext = createContext();

function GithubProvider({ children }) {
  const { getUser, getRepos, user, repos, error, isLoading } = useVideo();

  return (
    <GithubContext.Provider value={{ getUser, getRepos, user, repos, error, isLoading }}>
      {children}
    </GithubContext.Provider>
  )
}

export {
  GithubContext,
  GithubProvider,
}
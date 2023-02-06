import { useState } from "react";
import api from "../services/api";

export default function useGithub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getUser(user) {
    try {
      setIsLoading(true);

      const { data } = await api.get(`/${user}`);

      await getRepos(user);
      setUser(data);
      setIsLoading(false);

    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }

  async function getRepos(user) {
    try {
      const { data } = await api.get(`/${user}/repos`);
      setRepos(data);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  }

  return { getUser, getRepos, user, repos, error, isLoading };
}
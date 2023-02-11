import { useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export default function useGithub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getUser(user) {
    try {
      setIsLoading(true);

      const { data } = await api.get(`/${user}`);

      await getRepos(user);
      setUser(data);
      setIsLoading(false);

    } catch (error) {
      setUser(null)
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });

      setIsLoading(false);
    }
  }

  async function getRepos(user) {
    try {
      const { data } = await api.get(`/${user}/repos`);

      setRepos(data);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return { getUser, getRepos, user, repos, isLoading };
}
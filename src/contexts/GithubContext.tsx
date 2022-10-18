import { useEffect, useState, createContext, ReactNode } from "react";

import { api } from "../lib/axios";

interface IGithubProps {
  name: string;
  bio: string;
  login: string;
  followers: number;
  company?: string;
  repos_url: string;
}

interface IRepoProps {
  name: string;
  id: string;
  full_name: string;
  url: string;
  description?: string;
  created_at: Date;
}

interface IGithubContextProps {
  data: IGithubProps;
  repositories: IRepoProps[];
}

export const GithubContext = createContext({} as IGithubContextProps);

interface GithubProviderProps {
  children: ReactNode;
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [data, setData] = useState<IGithubProps>({} as IGithubProps);
  const [repositories, setRepositories] = useState<IRepoProps[]>([]);

  const username = "murilojssilva";

  async function fetchGithub() {
    const response = await api.get(`/users/${username}`);
    setData(response.data);
  }

  async function fetchPosts() {
    const responsePosts = await api.get(`/users/${username}/repos`);
    setRepositories(responsePosts.data);
  }

  useEffect(() => {
    fetchGithub();
    fetchPosts();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        data,
        repositories,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

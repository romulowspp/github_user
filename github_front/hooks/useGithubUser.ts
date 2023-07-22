import { useState, useEffect } from 'react';
import axios from 'axios';
import { GithubUser } from '@/models/GithubUser';

export const useGithubUser = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<any>(null);

  useEffect(() => {
    if (username) {
      setIsLoading(true);
      setIsError(false);
      axios.get<GithubUser>(`${process.env.NEXT_PUBLIC_API_URL}${username}`)
        .then(response => {
          setUser(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          setIsError(error);
          setIsLoading(false);
        });
    }
  }, [username]);

  const startFetching = (username: string) => {
    setUsername(username);
  };

  return {
    user,
    isLoading,
    isError,
    startFetching,
  };
};
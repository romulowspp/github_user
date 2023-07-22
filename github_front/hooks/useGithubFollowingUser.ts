import { useState, useEffect } from 'react';
import axios from 'axios';
import { FollowingUser } from '@/models/FollowingUser';

export const useGithubFollowingUser = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [followingUsers, setFollowingUsers] = useState<FollowingUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<any>(null);

  useEffect(() => {
    if (username) {
      setIsLoading(true);
      setIsError(false);
      axios.get<FollowingUser[]>(`${process.env.NEXT_PUBLIC_API_URL}${username}/following`)
        .then(response => {
          setFollowingUsers(response.data);
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
    followingUsers,
    isLoading,
    isError,
    startFetching,
  };
};
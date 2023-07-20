import { useState, ChangeEvent, FormEvent } from 'react';
import { useGithubUser } from '@/hooks/useGithubUser';
import { mutate } from 'swr';

interface GithubUser {
  login: string;
  avatar_url?: string;
  bio?: string;
}

const Search = () => {
  const [username, setUsername] = useState<string>('');
  const { user, isError, startFetching } = useGithubUser();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startFetching(username);
  };

  return (
    <div className="container mx-auto py-4">
      <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
        <input 
          type="text" 
          value={username} 
          onChange={handleChange} 
          className="border px-2 py-1 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">Search</button>
      </form>

      {isError && <div className="text-red-500">Error loading user</div>}
      {!user && <div>Loading...</div>}
      {user && (
        <div className="flex container">
          <img src={user.avatar_url} alt="User Avatar" className="w-24 h-24 rounded-full mx-2"/>
          <div className="">
            <h2 className="text-2xl mb-2">{user.login} - {user.name}</h2>
            <p className="mt-2">{user.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
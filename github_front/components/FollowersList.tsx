import { useGithubFollowingUser } from "@/hooks/useGithubFollowingUser";
import { FollowingUser } from "@/models/FollowingUser";
import { ChangeEvent, useEffect, useState } from "react";

interface FollowersListProps {
  username: string;
}

const FollowersList: React.FC<FollowersListProps> = ({ username }) => {
  const [followingUsername, setFollowingUsername] = useState<string>("");
  const { followingUsers, isLoading, isError, startFetching } =
    useGithubFollowingUser();

  useEffect(() => {
    startFetching(username);
  }, [username, startFetching]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFollowingUsername(event.target.value);
  };

  return (
    <div className="md:container py-4">
      <form className="mb-4 flex justify-center">
        <input
          type="text"
          value={followingUsername}
          onChange={handleChange}
          className="border px-2 py-1 mr-2"
          placeholder="Buscar seguidores"
        />
      </form>

      <div className="overflow-scroll h-screen">
        {isError && (
          <div className="text-red-500">Erro ao carregar seguidores</div>
        )}
        {!followingUsers && isLoading && <div>Carregando...</div>}
        {followingUsers && !isError && (
          <>
            {followingUsers
              .filter((followingUser: FollowingUser) =>
                followingUser.name
                  .toLowerCase()
                  .includes(followingUsername.toLowerCase())
              )
              .map((followingUser: FollowingUser, index) => (
                <div key={index} className="container py-2">
                  <div className="w-full flex flex-col border items-center md:flex-row bg-white rounded-lg py-3 px-5">
                    <img
                      src={followingUser.avatar_url}
                      alt="User Avatar"
                      className="w-24 h-24 rounded-full mx-2"
                    />
                    <div className="">
                      <h2 className="text-2xl mb-2">{followingUser.name}</h2>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FollowersList;

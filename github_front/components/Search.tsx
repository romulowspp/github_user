import { useState, ChangeEvent, FormEvent } from "react";
import { useGithubUser } from "@/hooks/useGithubUser";
import BioModal from "@/components/BioModal";
import FollowersList from "@/components/FollowersList";

const Search = () => {
  const [username, setUsername] = useState<string>("");
  const [showBioModal, setShowBioModal] = useState<boolean>(false);
  const { user, isLoading, isError, startFetching } = useGithubUser();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startFetching(username);
  };

  return (
    <div className="md:container py-4">
      <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
        <input
          type="text"
          onChange={handleChange}
          className="border px-2 py-1 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">
          Buscar
        </button>
      </form>

      {isError && <div className="text-red-500">Erro ao carregar usuário</div>}
      {!user && isLoading && <div>Carregando...</div>}
      {(user && !isError) && (
        <>
          { showBioModal && (<BioModal bio={user.bio} onClose={() => setShowBioModal(false)} />)}
          <div className="container">
            <div className="w-full flex flex-col border items-center md:flex-row bg-white rounded-lg py-3 px-5">
              <img
                src={user.avatar_url}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-2"
              />
              <div className="">
                <h2 className="text-2xl mb-2">
                  {user.username} - {user.name}
                </h2>
                {user.bio && (<p className="mt-2 cursor-pointer text-blue-500"><a onClick={e => {e.preventDefault(); setShowBioModal(true)}}>Mostrar Bio</a></p>)}
                <p className="mt-2">
                  <a className="text-blue-500" href={user.html_url}>
                    Github URL
                  </a>
                </p>
                {user.blog && (
                  <p className="mt-2">
                    <a href={user.blog}>Blog URL</a>
                  </p>
                )}
                {user.company && (
                  <p className="mt-2">
                    {user.company}{" "}
                    {user.location && <span> - {user.location}</span>}
                  </p>
                )}
                <p className="mt-2">
                  <span className="font-bold">Seguidores:</span> {user.followers}{" "}
                  - <span className="font-bold">Seguindo:</span> {user.following}
                </p>
                <p className="mt-2">
                  <span className="font-bold">Repositórios Públicos:</span>{" "}
                  {user.public_repos}
                </p>
              </div>
            </div>
            <FollowersList username={user.username} />
          </div>
        </>
      )}
    </div>
  );
};

export default Search;

import Header from "@/components/Header";
import Search from "@/components/Search";

export default function Home() {
  return (
    <>
      <Header/>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-2 bg-gradient-to-t from-blue-100 via-blue-300 to-sky-200`}
      >
        <Search />
      </main>
    </>
  )
}

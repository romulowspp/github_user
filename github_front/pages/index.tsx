import Header from "@/components/Header";
import Search from "@/components/Search";

export default function Home() {
  return (
    <>
      <Header/>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-2`}
      >
        <Search />
      </main>
    </>
  )
}

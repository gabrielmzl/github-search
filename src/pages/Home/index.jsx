import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SkeletonCard } from "../../components/SkeletonCard";
import { User } from "../../components/User";
import { GithubContext } from "../../context/GithubContext";
import { Error } from "./styles";

export function Home() {

  const { user, isLoading, error } = useContext(GithubContext);

  return (
    <>
      <Header />

      <main>
        {isLoading ? (
          <SkeletonCard />
        ) : (
          user && !error && <User />
        )}
      </main>

      <Footer />
    </>
  )
}
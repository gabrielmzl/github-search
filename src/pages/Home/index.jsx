import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SkeletonCard } from "../../components/SkeletonCard";
import { User } from "../../components/User";
import { GithubContext } from "../../context/GithubContext";
import { Container } from "./styles";

export function Home() {

  const { user, isLoading } = useContext(GithubContext);

  return (
    <Container>
      <Header />

      <main>
        {isLoading ? (
          <SkeletonCard />
        ) : (
          user && <User />
        )}
      </main>

      <Footer />
    </Container>
  )
}
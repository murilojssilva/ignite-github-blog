import { Header } from "../../components/Header";
import { CardProfile } from "../../components/ProfileCard";
import { PublicationsList } from "../../components/PublicationsList";
import { HomeContainer } from "./styled";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <CardProfile />
      <PublicationsList />
    </HomeContainer>
  );
}

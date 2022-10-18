import { useContext, useEffect, useState } from "react";
import { GithubContext } from "../../contexts/GithubContext";
import { dateFormatter } from "../../utils/formatter";
import { Card } from "./Card";
import { PublicationsListContainer } from "./styles";

export function PublicationsList() {
  const { repositories } = useContext(GithubContext);

  return (
    <PublicationsListContainer>
      {repositories.map((repository) => (
        <Card
          url={repository.url}
          key={repository.id}
          title={repository.name}
          created_at={dateFormatter.format(new Date(repository.created_at))}
          description={repository.description}
        />
      ))}
    </PublicationsListContainer>
  );
}

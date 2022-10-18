import { CardBio, CardContainer, CardTitle } from "./styles";

interface ICardProps {
  title: string;
  created_at: string;
  description?: string;
  url: string;
}

export function Card({ title, created_at, description, url }: ICardProps) {
  return (
    <a href={url}>
      <CardContainer>
        <CardTitle>
          <h1>{title}</h1>
          <span>{created_at}</span>
        </CardTitle>
        <CardBio>
          <p>{description}</p>
        </CardBio>
      </CardContainer>
    </a>
  );
}

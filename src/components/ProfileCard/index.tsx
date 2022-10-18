import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { GithubContext } from "../../contexts/GithubContext";

import { api } from "../../lib/axios";
import {
  CardProfileAvatar,
  CardProfileContainer,
  CardProfileIcons,
  CardProfileInfos,
  CardProfileLink,
} from "./styles";

export function CardProfile() {
  const { data } = useContext(GithubContext);

  return (
    <CardProfileContainer>
      <CardProfileAvatar>
        <img src={`https://github.com/${data.login}.png`} alt={data.login} />
      </CardProfileAvatar>

      <CardProfileInfos>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
        <CardProfileIcons>
          <span>
            <GithubLogo />
            {data.login}
          </span>
          {data.company && (
            <span>
              <Buildings />
              {data?.company}
            </span>
          )}

          <span>
            <Users />
            {data.followers} seguidores
          </span>
        </CardProfileIcons>
      </CardProfileInfos>
      <CardProfileLink>
        <a href={`https://github.com/${data.login}`}>
          {`GITHUB `}
          <ArrowSquareOut />
        </a>
      </CardProfileLink>
    </CardProfileContainer>
  );
}

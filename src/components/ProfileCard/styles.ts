import styled from "styled-components";

export const CardProfileContainer = styled.section`
  background: ${(props) => props.theme["profile"]};
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  margin-top: -5rem;
  border-radius: 6px;
  gap: 1rem;
  display: flex;
  flex-direction: row;
`;

export const CardProfileAvatar = styled.div`
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 6px;
  }
`;

export const CardProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardProfileIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  span {
    display: flex;
    gap: 0.125rem;
    flex-direction: row;
    align-items: center;
    color: ${(props) => props.theme["subtitle"]};
  }
`;

export const CardProfileLink = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme["blue"]};
  }
`;

import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.theme["post"]};
  border-radius: 6px;
`;

export const CardTitle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardBio = styled.main`
  padding: 0.5rem;
  color: ${(props) => props.theme["text"]};
`;

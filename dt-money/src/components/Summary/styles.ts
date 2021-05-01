import styled, { css } from 'styled-components';

type SummaryProps = {
  highlight?: boolean;
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`;

export const Summary = styled.div<SummaryProps>`
  background-color: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 4px;
  color: var(--text-title);

  ${({ highlight }) =>
    highlight &&
    css`
      background-color: var(--green);
      color: #fff;
    `}

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;

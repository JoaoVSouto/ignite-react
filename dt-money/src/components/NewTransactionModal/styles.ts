import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 4px;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 200ms;

    &:hover,
    &:focus {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

type RadioBoxProps = {
  isActive?: boolean;
};

export const RadioBox = styled.button.attrs({ type: 'button' })<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 4px;

  background-color: ${({ isActive }) => (isActive ? '#eee' : 'transparent')};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 200ms;

  &:hover,
  &:focus {
    border-color: ${darken(0.2, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

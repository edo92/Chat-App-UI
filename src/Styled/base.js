import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InputBase = styled.input`
  outline: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  background: transparent;
  font-size: 15px;
  font-weight: 300;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

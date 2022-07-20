import styled from '@emotion/styled';

export const Ul = styled.ul`
  border: black solid 1px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 50px;
  margin-right: 30px;
  max-height: 750px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #d0a686;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #7b7169;
    border-radius: 20px;
  }
`;

export const Li = styled.li`
  margin: 30px;
  width: 150px;
  max-height: 400px;
  border: black solid 1px;
  padding: 20px;
  border-radius: 15px;
  list-style-type: none;
`;

export const Button = styled.button`
  margin: 15px 5px 0px 45px;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  background-color: #d0a686;
  border: black solid 1px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 150px;
  height: 200px;
`;

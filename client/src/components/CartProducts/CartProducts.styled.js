import styled from '@emotion/styled';

export const Ul = styled.ul`
  border: black solid 1px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  //   flex-wrap: wrap;
  margin-left: 50px;
  margin-right: 0px;
  margin-top: 0px;
  max-height: 600px;
  max-width: 1000px;
  overflow-y: scroll;
  padding: 20px;
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
  margin: 10px;
  max-width: 700px;
  max-height: 120px;
  border: black solid 1px;
  padding: 20px;
  border-radius: 15px;
  list-style-type: none;
  display: flex;
`;

export const Div = styled.div`
  display: block;
  margin-left: 20px;
  text-align: center;
  padding: 0 40px;
`;

export const Qty = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 350px;
  height: 40px;
  border: black solid 1px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Button = styled.button`
  height: 20px;
  width: 50px;
  margin-right: 0px;
  border: 0;
  //   border-radius: 5px;
  background-color: #d0a686;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 130px;
`;

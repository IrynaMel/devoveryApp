import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: black solid 1px;
  border-radius: 15px;
  padding: 30px 40px;
  margin: 0 30px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
export const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: black solid 1px;
  padding: 5px 10px;
  margin-top: 5px;
  &:focus {
    background-color: #d0a686;
    color: white;
  }
`;

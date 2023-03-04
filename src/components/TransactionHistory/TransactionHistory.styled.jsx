import styled from 'styled-components';

export const Transaction = styled.table`
  width: 900px;

  margin: 50px auto;

  background-color: #eaeaea;
  
  box-shadow: 10px 10px 23px #9f9f9f,
             -5px -5px 23px #ffffff;
`;

export const TransactionTitleHead = styled.thead`
  border-radius: 10px;
`;

export const TransactionTitleList = styled.tr`
  height: 60px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  background-color: #3db4d1;
`;

export const TransactionTitleItem = styled.th`
  padding: 10px;
`;

export const TransactionBody = styled.tbody`
  color: #ffffff;
  font-weight: 400;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 18px;
`;

export const TransactionList = styled.tr`
  &:nth-child(even) {
    background: #c3d7de;
  }
`;

export const TransactionItem = styled.td`  
  font-size: 16px;
  color: rgba(0, 0, 0, .7);

  text-transform: capitalize;
  text-align: center;

  padding: 15px;
  border: 1px solid #e1e1e1;
`;
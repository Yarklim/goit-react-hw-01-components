import styled from 'styled-components';

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  
  margin: 0 auto;
  margin-bottom: 15px;
  margin-top: 15px;

  box-shadow: 10px 10px 23px #9f9f9f,
             -5px -5px 23px #ffffff;
  border-radius: 10px;
  overflow: hidden;
  
  padding: 10px 20px;
`;

export const FriendListStatus = styled.span`
  width: 20px;
  height: 20px;

  margin-right: 20px;

  border-radius: 50%;
  
  background-color: ${friends => (friends.status ? 'green' : 'red')};
`;

export const FriendListImage = styled.img`
  display: block;

  width: 70px;
  height: 70px;
`;

export const FriendListName = styled.p`
  font-weight: 600;
  font-size: 24px;

  margin-left: 20px;
`;
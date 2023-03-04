import styled from 'styled-components';

export const UserCard = styled.div`
  width: 360px;

  margin: 0 auto;
  margin-top: 40px;
  
  box-shadow: 10px 10px 23px #9f9f9f,
             -10px -10px 23px #ffffff;
  border-radius: 21px;
  overflow: hidden;
`;

export const UserData = styled.div`
  width: 100%;
  
  padding-top: 60px;
  padding-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid rgba(45, 122, 143, 0.5) ;

  background: linear-gradient(to bottom, #b8d4dc 0%, 
  rgba(117,189,209,1) 45%, 
  rgba(73,165,191,1) 100%);
`;

export const UserImage = styled.img`
  width: 100px;

  margin-bottom: 20px;

  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 32px;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;

  font-size: 18px;
`;

export const UserLocation = styled.p`
  font-size: 20px;
  font-weight: 600;

  color: rgba(0, 0, 0, .5);
`;

export const UserStatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;  

  background: #2699b9  
`;

export const UserStatElement = styled.li`
  width: 100px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(2) {
    border-right: 1px solid rgba(45, 122, 143, 0.8);
	border-left: 1px solid rgba(45, 122, 143, 0.8);
  }

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 600;

  color: rgba(0, 0, 0, .5);

  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
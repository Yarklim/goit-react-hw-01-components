import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  width: 360px;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin: 0 auto;
  margin-top: 80px;

  background-color: #e9e9e9;
  
  box-shadow: 10px 10px 23px #9f9f9f,
             -5px -5px 23px #ffffff;
  border-radius: 12px;
  overflow: hidden;
`;

export const StatisticsTitle = styled.h2`
  font-weight: 700;

  color: rgba(0, 0, 0, .5);

  padding-top: 20px;

  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  width: 100%;
  height: 80px;

  display: flex;

  
`;

export const StatisticsItem = styled.li`
  width: 100%;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.color};
`;

export const StatisticsLabel = styled.span`
  font-weight: 600;
  font-size: 16px;

  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-weight: 500;
  font-size: 20px;
`;
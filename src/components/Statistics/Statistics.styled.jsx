import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin: 0;
  width: 400px;
  background-color: #fff;
  border: 2px solid gray;
  margin: 40px auto 0;
`;
export const StatisticsTitle = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
`;
export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  border: 1px solid #504f4f;
  margin: 0;
`;
export const StatisticsListItem = styled.li`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #504f4f;
  background-color: #808000;
`;
export const Label = styled.span`
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
`;
export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 900;
  color: #fff;
`;

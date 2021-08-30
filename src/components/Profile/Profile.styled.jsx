import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  width: 400px;
  margin: 0 auto;
  height: auto;
  border: 2px solid gray;
`;
export const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid black;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;
  background-color: #f0f0f0;
`;
export const Avatar = styled.img`
  width: auto;
  height: 100%;
  margin: 0 auto;
`;
export const Description = styled.div`
  background-color: #fff;
  padding: 60px 0 40px;
`;
export const Name = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin: 0 0 15px;
`;
export const Tag = styled.p`
  font-size: 20px;
  color: gray;
  margin: 0 0 10px;
`;
export const Location = styled.p`
  font-size: 20px;
  color: gray;
  margin: 0;
`;
export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1px;
  height: 100px;
  border-top: 1px solid gray;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  border-right: 1px solid gray;
`;
export const StatsItemTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px;
  color: #696969;
`;
export const StatsItemNumber = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: black;
`;

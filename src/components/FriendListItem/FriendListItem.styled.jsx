import styled from '@emotion/styled';

export const FriendItem = styled.li`
  width: 400px;
  height: auto;
  border: 2px solid #969696;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 10px;
  box-shadow: 5px -5px 5px 0px rgba(0, 0, 0, 0.75);
`;
export const FriendStatus = styled.span`
  width: 25px;
  height: 25px;
  background-color: aqua;
  border-radius: 50%;
  margin-left: 20px;
  background-color: ${props => 
      props.isOnline ? 'green' : 'red'
  }
`;
export const FriendAvatar= styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  margin: 10px 20px;
`;
export const FriendName = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;


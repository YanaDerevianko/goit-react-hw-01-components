import propTypes from 'prop-types';
import {
  ProfileBox,
  Avatar,
  AvatarWrapper,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  StatsItemTitle,
  StatsItemNumber,
} from './Profile.styled';

export const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <ProfileBox>
      <Description>
        <AvatarWrapper>
          <Avatar src={avatar} alt={name} />
        </AvatarWrapper>
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <StatsItemTitle>Followers</StatsItemTitle>
          <StatsItemNumber>{followers}</StatsItemNumber>
        </StatsItem>
        <StatsItem>
          <StatsItemTitle>Views</StatsItemTitle>
          <StatsItemNumber>{views}</StatsItemNumber>
        </StatsItem>
        <StatsItem>
          <StatsItemTitle>Likes</StatsItemTitle>
          <StatsItemNumber>{likes}</StatsItemNumber>
        </StatsItem>
      </Stats>
    </ProfileBox>
  );
};
Profile.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};

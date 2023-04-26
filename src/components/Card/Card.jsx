import { useEffect, useState } from 'react';
import {
  Avatar,
  Boy,
  Image,
  RectangleImage,
  StyledFollowButton,
  StyledFollowingButton,
  StyledText,
  TextContainer,
  Wrapper,
} from './CardStyle';



export const Card = ({ tweets, avatar, user, followers }) => {
    const [isFollowing, setIsFollowing] = useState(() => {
        const isFollowing = JSON.parse(localStorage.getItem('isFollowing'));
        return isFollowing !== null ? isFollowing : false;
      });

      let numberFollowers = followers;
      let formattedFollowers = numberFollowers.toLocaleString('en-US');

      const [followersCount, setFollowersCount] = useState(() => {
        const followersCount = JSON.parse(localStorage.getItem('followersCount'));
        return followersCount !== null ? followersCount : formattedFollowers;
      });


        
      const handleChange = () => {
        setIsFollowing(!isFollowing);
        setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
        };

      useEffect(() => {
        localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
        localStorage.setItem('followersCount', JSON.stringify(followersCount));
      }, [isFollowing, followersCount]);

  return (
    <Wrapper>
      <Image></Image>
      <RectangleImage></RectangleImage>
      <Boy>
        <Avatar src={avatar} alt="User avatar" />
      </Boy>
      <TextContainer>
        <StyledText>{user}</StyledText>
        <StyledText>{tweets} tweets</StyledText>
        <StyledText>{followersCount} followers</StyledText>
      </TextContainer>
      {!isFollowing ? (
        <StyledFollowButton onClick={handleChange}>follow</StyledFollowButton>
      ) : (
        <StyledFollowingButton onClick={handleChange}>
          following
        </StyledFollowingButton>
      )}
    </Wrapper>
  );
};
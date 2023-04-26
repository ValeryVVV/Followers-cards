import { useEffect, useState } from 'react';
import {
  Avatar,
  Boy,
  Picture,
  Rectangle,
  StyledButton,
  StyledFollowingButton,
  Text,
  TextWrapper,
  Wrapper,
} from './CardStyle';



export const Card = ({ tweets, avatar, user }) => {
    const [isFollowing, setIsFollowing] = useState(() => {
        const isFollowing = JSON.parse(localStorage.getItem('isFollowing'));
        return isFollowing !== null ? isFollowing : false;
      });
      const [followersCount, setFollowersCount] = useState(() => {
        const followersCount = JSON.parse(localStorage.getItem('followersCount'));
        return followersCount !== null ? followersCount : 100500;
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
      <Picture></Picture>
      <Rectangle></Rectangle>
      <Boy>
        <Avatar src={avatar} alt="User avatar" />
      </Boy>
      <TextWrapper>
        <Text>{user}</Text>
        <Text>{tweets} tweets</Text>
        <Text>{followersCount} followers</Text>
      </TextWrapper>
      {!isFollowing ? (
        <StyledButton onClick={handleChange}>follow</StyledButton>
      ) : (
        <StyledFollowingButton onClick={handleChange}>
          following
        </StyledFollowingButton>
      )}
    </Wrapper>
  );
};
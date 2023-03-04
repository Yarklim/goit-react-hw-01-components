import PropTypes from 'prop-types';
import { FriendListItem, FriendListStatus, FriendListImage, FriendListName } from './FriendListItem.styled';

const FriendList = props => {
  return (
    <FriendListItem>
      <FriendListStatus status={props.friend.isOnline} />
      <FriendListImage src={props.friend.avatar} alt={props.friend.name} />
      <FriendListName>{props.friend.name}</FriendListName>
    </FriendListItem>
  );
};

export default FriendList;

FriendList.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
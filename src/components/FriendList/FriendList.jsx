import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Friends } from "./FriendList.styled";

const FriendList = props => {
  return (
    <Friends>
      {props.friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </Friends>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
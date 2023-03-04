import PropTypes from 'prop-types';
import {
  UserCard,
  UserData,
  UserStatsList,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  Span,
  Quantity,
  UserStatElement,
} from './Profile.styled';

const Profile = (user) => {
	const { username, tag, location, avatar, stats } = user;

	return (
		<UserCard>
		<UserData>
			<UserImage
				src={avatar}
				alt={username}
				width="320"
			/>
			<UserName>{username}</UserName>
			<UserTag>@{tag}</UserTag>
				<UserLocation>{ location}</UserLocation>
		</UserData>

		<UserStatsList>
			<UserStatElement key={stats.followers}>
				<Span>Followers</Span>
				<Quantity>{ stats.followers}</Quantity>
			</UserStatElement>
				
			<UserStatElement key={stats.views}>
				<Span>Views</Span>
				<Quantity>{ stats.views}</Quantity>
			</UserStatElement>
				
			<UserStatElement key={stats.likes}>
				<Span>Likes</Span>
				<Quantity>{ stats.likes}</Quantity>
			</UserStatElement>
		</UserStatsList>
		</UserCard>
	);
}

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
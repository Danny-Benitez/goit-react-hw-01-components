import css from "./Friends.module.css";
import PropTypes from "prop-types";

/*console.log(css);*/

const Friends = ({ friends }) => {
  return (
    <div className={css.friendsContainer}>
      <ul className={css.friendsList}>
        {friends.map((friend) => (
          <li className={css.friendsItem} key={friend.id}>
            <img
              src={friend.avatar}
              alt="friend-profile-pic"
              className={css.friendsAvatar}
            />
            <span className={css.name}>{friend.name}</span>
            <span className={css.onlineStatus}>
              {friend.isOnline ? "Online" : "Offline"}
            </span>
            <span className={css.statusIcon}>
              {friend.isOnline ? "🟢" : "🔴"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Ensures `id` is a number
      name: PropTypes.string.isRequired, // Ensures `name` is a string
      avatar: PropTypes.string.isRequired, // Ensures `avatar` is a string (URL)
      isOnline: PropTypes.bool.isRequired, // Ensures `isOnline` is a boolean
    })
  ).isRequired,
};

export default Friends;

import css from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ username, tag, location, avatar, stats }) => {
  /* const checkFollowers = stats => {
      console.log(stats);
    };

    checkFollowers(stats);*/
  return (
    <div className={css.profileContainer}>
      <div className={css.description}>
        <img src={avatar} alt="avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.profileMetrics}>
        <li>
          <span className="label">Followers:</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views:</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes:</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

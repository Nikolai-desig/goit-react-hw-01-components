import css from 'components/Friends/Friends.module.css';
import PropTypes from 'prop-types';


export function Friends({friends}) {
  const friendslist = friends.map(({id, name, avatar, isOnline}) => (
    <li key={id} className={css.item}>
      <span className={isOnline ? `${css.status_online}` : `${css.status}`}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{name}</p>
    </li>
  ));
  return (<ul className={css.friend_list}>{friendslist}</ul>);
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

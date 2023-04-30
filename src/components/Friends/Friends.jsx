import css from 'components/Friends/Friends.module.css';
import PropTypes from 'prop-types';
import friends from 'data/friends.json';

export function Friends() {
  const friendslist = friends.map(el => (
    <li key={el.id} className={css.item}>
      <span className={el.isOnline ? `${css.status_online}` : `${css.status}`}>
        {el.isOnline}
      </span>
      <img className={css.avatar} src={el.avatar} alt="User avatar" />
      <p className={css.name}>{el.name}</p>
    </li>
  ));
  return <ul className={css.friend_list}>{friendslist}</ul>;
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

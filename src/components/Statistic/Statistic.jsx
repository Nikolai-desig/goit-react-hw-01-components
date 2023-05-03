import PropTypes from 'prop-types';
import css from 'components/Statistic/Statistic.module.css';

export function Statistic({ statistic }) {
  const stat = (
    
    <ul className={css.stat_list}>
      {statistic.map(({ id, label, percentage }) => (
        <li key={id} className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      {stat}
    </section>
  );
}

Statistic.propTypes = {
  statistic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

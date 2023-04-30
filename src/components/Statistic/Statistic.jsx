import PropTypes from 'prop-types';
import css from 'components/Statistic/Statistic.module.css';
import statistic from 'data/statistic.json';

export function Statistic() {
  const stat = (
    <ul className={css.stat_list}>
      {statistic.map(el =>
        <li key={el.id} className={css.item}>
          <span className={css.label}>{el.label}</span>
          <span className={css.percentage}>{el.percentage}%</span>
        </li>
      )}
    </ul>
  ); 
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
        {stat}
      </section>
    );
  
}

Event.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};


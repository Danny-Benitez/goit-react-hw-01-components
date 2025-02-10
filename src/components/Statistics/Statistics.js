import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  /*console.log(Array.isArray(stats), stats);*/
  /*console.log(stats);*/
  /*console.log(stats);*/
  /* console.log(typeof stats);*/
  return (
    <section className={css.statisticsSection}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map((stat) => (
          <div className={css.statContainer} key={stat.id}>
            <li className={css.statItem}>
              <span className={css.statLabel}>{stat.label}:</span>
              <span className={css.statPercentage}>{stat.percentage}</span>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;

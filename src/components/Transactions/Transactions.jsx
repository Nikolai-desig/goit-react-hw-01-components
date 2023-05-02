import PropTypes from 'prop-types';
import css from 'components/Transactions/Transactions.module.css'

export function TransactionHistory({ transactions }) {
  const transaction = transactions.map(({id, type, amount, currency}) => (
    <tbody key={id}>
      <tr>
        <td className={css.td_table}>{type}</td>
        <td className={css.td_table}>{amount}</td>
        <td className={css.td_table}>{currency}</td>
      </tr>
    </tbody>
  ));
  return (
    <table className={css.transaction_history}>
      <thead className={css.theader}>
        <tr>
          <th className={css.th_table}>Type</th>
          <th className={css.th_table}>Amount</th>
          <th className={css.th_table}>Currency</th>
        </tr>
      </thead>
      {transaction}
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
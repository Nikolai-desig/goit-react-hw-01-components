import PropTypes, { func } from 'prop-types';
import css from 'components/Transactions/Transactions.module.css'
import transactions from 'data/transactions.json';

export function TransactionHistory() {
    const transaction = transactions.map(el => (
      <tbody key={el.id}>
        <tr>
          <td className={css.td_table}>{el.type}</td>
          <td className={css.td_table}>{el.amount}</td>
          <td className={css.td_table}>{el.currency}</td>
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

Event.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
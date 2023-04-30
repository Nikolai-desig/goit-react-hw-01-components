import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json';

import { Statistic } from 'components/Statistic/Statistic';
import statistic from 'data/statistic.json'

import { Friends } from 'components/Friends/Friends';
import friends from 'data/friends.json';

import { TransactionHistory } from 'components/Transactions/Transactions'
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statistic} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

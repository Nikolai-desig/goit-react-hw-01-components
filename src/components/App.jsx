import { Profile } from 'components/Profile/Profile';
import { Friends } from 'components/Friends/Friends';
import { Statistic } from 'components/Statistic/Statistic';
import { Transactions } from 'components/Transactions/Transactions';
import userstat from '../data/statistic.json'


import { user } from 'data/user.json';
export const App = () => {
  return (
    <div>
      <Profile />
      <Friends />
      <Statistic />
      <Transactions />
    </div>
  );
};

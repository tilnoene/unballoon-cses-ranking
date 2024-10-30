import Card from './components/card';
import LastUpdate from './components/lastUpdate';

import { exampleUsers } from './utils';

import dayjs from 'dayjs';

export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));

  const users = exampleUsers;

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-4xl font-bold'>Ranking</h1>

        <LastUpdate lastUpdate={dayjs().add(8, 'minutes')} />
      </div>

      <div className='flex w-full flex-1 flex-col items-center gap-3 pb-4 pt-6'>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

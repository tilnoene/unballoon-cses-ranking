import Card from './components/card';
import LastUpdate from './components/lastUpdate';

import dayjs from 'dayjs';

type UserData = {
  id: string;
  number_of_questions: string;
  username: string;
};

export default async function Home() {
  // await new Promise((r) => setTimeout(r, 1000));

  const response = await fetch(
    process.env.API_URL ? process.env.API_URL.concat('user') : '',
    {
      cache: 'no-store',
    }
  );
  const usersData = await response.json();

  const users: User[] = usersData.data.map(
    (userData: UserData, index: number) => {
      return {
        id: userData.id,
        username: userData.username,
        solvedProblems: Number(userData.number_of_questions),
        placing: index + 1,
      };
    }
  );

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-4xl font-bold'>Ranking</h1>

        <LastUpdate lastUpdate={dayjs(usersData.last_update)} />
      </div>

      <div className='flex w-full flex-1 flex-col items-center gap-3 pb-4 pt-6'>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';

import emeraldMedal from '@/app/assets/emerald-medal.png';
import diamondMedal from '@/app/assets/diamond-medal.png';
import goldMedal from '@/app/assets/gold-medal.png';
import silverMedal from '@/app/assets/silver-medal.png';
import bronzeMedal from '@/app/assets/bronze-medal.png';
import blankMedal from '@/app/assets/blank-medal.png';

const getRankingMedal = (numberOfQuestions: number) => {
  if (numberOfQuestions >= 300) {
    return emeraldMedal;
  } else if (numberOfQuestions >= 275) {
    return diamondMedal;
  } else if (numberOfQuestions >= 200) {
    return goldMedal;
  } else if (numberOfQuestions >= 125) {
    return silverMedal;
  } else if (numberOfQuestions >= 50) {
    return bronzeMedal;
  } else {
    return blankMedal;
  }
};

export default function Card({ user }: { user: User }) {
  return (
    <a
      href={`https://cses.fi/user/${user.id}`}
      target='_blank'
      rel='noreferrer'
    >
      <div className='text-md bg-metal-600 flex h-10 w-72 items-center rounded font-semibold text-white'>
        <p className='mx-4'>{user.placing}</p>

        <Image
          src={getRankingMedal(user.numberOfQuestions)}
          width={16}
          height={16}
          alt=''
        />

        <p className='ml-2.5 w-full overflow-hidden text-ellipsis text-nowrap'>
          {user.username}
        </p>

        <p className='mx-4'>{user.numberOfQuestions}</p>
      </div>
    </a>
  );
}

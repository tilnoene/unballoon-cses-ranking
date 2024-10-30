import Image, { StaticImageData } from 'next/image';

import emeraldMedal from '@/app/assets/emerald-medal.png';
import diamondMedal from '@/app/assets/diamond-medal.png';
import goldMedal from '@/app/assets/gold-medal.png';
import silverMedal from '@/app/assets/silver-medal.png';
import bronzeMedal from '@/app/assets/bronze-medal.png';

type Badge = {
  name: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export default function About() {
  const badges: Badge[] = [
    {
      name: 'Bronze',
      description: '50 problemas',
      image: {
        src: bronzeMedal,
        alt: 'Medalha de Bronze',
      },
    },
    {
      name: 'Prata',
      description: '125 problemas',
      image: {
        src: silverMedal,
        alt: 'Medalha de Prata',
      },
    },
    {
      name: 'Ouro',
      description: '200 problemas',
      image: {
        src: goldMedal,
        alt: 'Medalha de Ouro',
      },
    },
    {
      name: 'Diamante',
      description: '275 problemas',
      image: {
        src: diamondMedal,
        alt: 'Medalha de Diamante',
      },
    },
    {
      name: 'Esmeralda',
      description: '300 problemas',
      image: {
        src: emeraldMedal,
        alt: 'Medalha de Esmeralda',
      },
    },
  ];

  return (
    <div className='w-full'>
      <div className='ml-auto mr-auto max-w-[768px] p-4 text-center'>
        <div className='mb-8'>
          <h1 className='mb-2 text-4xl font-bold'>Sobre</h1>

          <p>
            Este ranking contém informações sobre problemas resolvidos no site{' '}
            <a
              href='https://cses.fi/problemset/'
              target='_blank'
              rel='noreferrer'
              className='underline'
            >
              CSES
            </a>{' '}
            por integrantes do UnBalloon, um grupo de estudos de programação
            competitiva da Universidade de Brasília.
          </p>

          <br />

          <p>
            Para inserir seu nome no ranking, crie uma conta no site{' '}
            <a
              href='https://cses.fi/problemset/'
              target='_blank'
              rel='noreferrer'
              className='underline'
            >
              CSES
            </a>{' '}
            e mande uma mensagem no{' '}
            <a
              href='https://t.me/tilnoene'
              target='_blank'
              rel='noreferrer'
              className='underline'
            >
              Telegram
            </a>{' '}
            ou Discord (tilnoene#5846 ou Lia♡#7079).
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <h1 className='mb-6 text-4xl font-bold'>Classificações</h1>

          <div className='flex flex-col gap-7'>
            {badges.map((badge) => (
              // <div key={badge.name} className='flex w-64 items-center gap-3.5'>
              //   <Image
              //     style={{ height: 'auto' }}
              //     src={badge.image.src}
              //     alt={badge.image.alt}
              //     width={40}
              //     height={0}
              //   />

              //   <div>
              //     <h2 className='text-left text-2xl font-bold'>{badge.name}</h2>
              //     <h3 className='text-md text-neutral-300'>
              //       {badge.description}
              //     </h3>
              //   </div>
              // </div>

              <div key={badge.name}>
                <Image
                  style={{ height: 'auto' }}
                  src={badge.image.src}
                  alt={badge.image.alt}
                  width={130}
                  height={0}
                  className='ml-auto mr-auto'
                />

                <h2 className='mt-3 text-3xl font-bold'>{badge.name}</h2>
                <h3 className='text-neutral-300'>{badge.description}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

import unballoonBrand from '@/app/assets/unballoon-brand.png';

export default function Header() {
  return (
    <header className='flex h-20 w-full items-center justify-center'>
      <Image
        style={{ height: 'auto' }}
        src={unballoonBrand}
        width={180}
        height={64}
        alt='UnBalloon'
      />
    </header>
  );
}

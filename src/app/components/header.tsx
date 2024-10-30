import Image from 'next/image';

import unballoonBrand from '@/app/assets/unballoon-brand.png';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex h-20 w-full items-center justify-center'>
      <Link href='/'>
        <Image
          style={{ height: 'auto' }}
          src={unballoonBrand}
          width={180}
          height={64}
          alt='UnBalloon'
        />
      </Link>
    </header>
  );
}

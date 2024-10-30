export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-auto flex w-full items-center justify-center p-4'>
      <p className='text-sm'>&copy; {currentYear} UnBalloon</p>
    </footer>
  );
}

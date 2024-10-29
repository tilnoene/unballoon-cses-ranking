export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='p-4'>
      <p className='text-sm'>&copy; {currentYear} UnBalloon</p>
    </footer>
  );
}

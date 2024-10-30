import LoadingCard from './components/loadingCard';

export default function HomeLoading() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-4xl font-bold'>Ranking</h1>
      </div>

      <div className='flex w-full flex-1 flex-col items-center gap-3 pb-4 pt-6'>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
}

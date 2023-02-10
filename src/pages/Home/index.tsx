import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadingBalloon from '../../components/LoadingBalloon';
import RankingCard from '../../components/RankingCard';

import {
  ContainerLoading,
  ContainerPage,
  ContainerRanking,
  Ranking,
} from './styles';

import api from '../../services/api';

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getRankingData = () => {
    api.get(`user`)
      .then(response => {
        const usersInfo: User[] = response.data;

        usersInfo
          .sort((a, b) => a.numberOfQuestions - b.numberOfQuestions)
          .reverse();

        setUsers(usersInfo);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  };

  useEffect(() => {
    getRankingData();
  }, []);

  return (
    <ContainerPage>
      <Header />

      {loading ? (
        <ContainerLoading>
          <LoadingBalloon />
        </ContainerLoading>
      ) : (
        <ContainerRanking>
          <h1>Ranking</h1>
          <Ranking>
            {users.map((user, idx) => {
              return (
                <RankingCard
                  key={user.id}
                  position={idx + 1}
                  username={user.username}
                  numberOfQuestions={user.numberOfQuestions}
                  userId={user.id}
                />
              );
            })}
          </Ranking>
        </ContainerRanking>
      )}

      <Footer />
    </ContainerPage>
  );
};

export default Home;

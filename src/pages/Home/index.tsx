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
  Title,
} from './styles';

import api from '../../services/api';

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getRankingData = () => {
    api.get(`user`)
      .then(response => {
        const usersInfo: User[] = response.data.map((user: any) => {
          return {
            id: user.id,
            username: user.username,
            numberOfQuestions: user.number_of_questions,
          }
        });

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

      <ContainerLoading>
        <p>O ranking está em manutenção :(</p>
      </ContainerLoading>

      {/* {loading ? (
        <ContainerLoading>
          <LoadingBalloon />
        </ContainerLoading>
      ) : (
        <ContainerRanking>
          <Title>Ranking</Title>

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
      )} */}

      <Footer />
    </ContainerPage>
  );
};

export default Home;

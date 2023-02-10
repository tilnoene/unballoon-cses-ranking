import { useEffect, useState } from 'react';

import LoadingBalloon from '../../components/LoadingBalloon';
import RankingCard from '../../components/RankingCard';

import {
  ContainerLoading,
  ContainerPage,
  ContainerRanking,
  Footer,
  Header,
  Ranking,
} from './styles';

import unballoonBrand from '../../assets/unballoon_brand.png';

import api from '../../services/api';

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const currentYear = new Date().getFullYear();

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
      <Header>
        <img src={unballoonBrand} alt="Grupo UnBalloon" />
        <h1>Ranking</h1>
      </Header>

      {loading ? (
        <ContainerLoading>
          <LoadingBalloon />
        </ContainerLoading>
      ) : (
        <ContainerRanking>
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

      <Footer>
        <p>&copy; {currentYear} UnBalloon</p>
      </Footer>
    </ContainerPage>
  );
};

export default Home;

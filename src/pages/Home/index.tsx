import { useEffect, useState } from 'react';
import LoadingBalloon from '../../components/LoadingBalloon';

import getUserInfoCSES from '../../services/getUserInfoCSES';

import {
  ContainerLoading,
  ContainerPage,
  ContainerRanking,
  Header,
  Ranking,
} from './styles';
import unballoonLogo from '../../assets/unballoon_logo.png';
import RankingCard from '../../components/RankingCard';
import api from '../../services/api';


const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getUsersInfo = async (usersId: string[]) => {
    var usersInfo: User[] = [];

    for (let i = 0; i < usersId.length; i++) {
      usersInfo.push(await getUserInfoCSES(usersId[i]));
    }

    return usersInfo;
  };

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
        <img src={unballoonLogo} alt="Logo do grupo UnBalloon" />
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
    </ContainerPage>
  );
};

export default Home;

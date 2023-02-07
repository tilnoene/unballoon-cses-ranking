import {
  Card,
  CardName,
  CardNumberOfQuestions,
  CardPosition,
  CardRank,
} from './styles';

import emeraldMedal from '../../assets/emerald_medal.png';
import diamondMedal from '../../assets/diamond_medal.png';
import goldMedal from '../../assets/gold_medal.png';
import silverMedal from '../../assets/silver_medal.png';
import bronzeMedal from '../../assets/bronze_medal.png';
import blankMedal from '../../assets/blank_medal.png';

const getRankingMedal = (numberOfQuestions: number) => {
  if (numberOfQuestions >= 300) {
    return emeraldMedal;
  } else if (numberOfQuestions >= 275) {
    return diamondMedal;
  } else if (numberOfQuestions >= 200) {
    return goldMedal;
  } else if (numberOfQuestions >= 125) {
    return silverMedal;
  }  else if (numberOfQuestions >= 50) {
    return bronzeMedal;
  } else {
    return blankMedal;
  }
};

const RankingCard = ({
  position,
  username,
  numberOfQuestions,
  userId,
}: {
  position: number;
  username: string;
  numberOfQuestions: number;
  userId: string;
}) => {
  return (
    <a href={`https://cses.fi/user/${userId}`} target="_blank" rel="noreferrer">
      <Card>
        <CardPosition>{position}</CardPosition>
        <CardRank>
          <img src={getRankingMedal(numberOfQuestions)} alt="Medalha" />
        </CardRank>
        <CardName>{username}</CardName>
        <CardNumberOfQuestions>{numberOfQuestions}</CardNumberOfQuestions>
      </Card>
    </a>
  );
};

export default RankingCard;

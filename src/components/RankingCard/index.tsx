import {
  Card,
  CardName,
  CardNumberOfQuestions,
  CardPosition,
  CardRank,
} from './styles';

import goldSymbol from '../../assets/gold_symbol.png';

const getRankingSymbol = (numberOfQuestions: number) => {
  if (numberOfQuestions < 30) {
    return goldSymbol;
  } else if (numberOfQuestions < 60) {
    return goldSymbol;
  } else {
    return goldSymbol;
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
          <img src={getRankingSymbol(numberOfQuestions)} alt="Emblema" />
        </CardRank>
        <CardName>{username}</CardName>
        <CardNumberOfQuestions>{numberOfQuestions}</CardNumberOfQuestions>
      </Card>
    </a>
  );
};

export default RankingCard;

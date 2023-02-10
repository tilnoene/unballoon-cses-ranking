import { ContainerCard } from './styles';

const MedalCard = ({
  name,
  description,
  src,
  alt,
}: {
  name: string;
  description: string;
  src: any;
  alt: string;
}) => {
  return (
    <ContainerCard>
      <img src={src} alt={alt} />
      <h2>{name}</h2>
      <p>{description}</p>
    </ContainerCard>
  );
};

export default MedalCard;

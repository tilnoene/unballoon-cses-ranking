import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MedalCard from '../../components/MedalCard';

import emeraldMedal from '../../assets/emerald_medal.png';
import diamondMedal from '../../assets/diamond_medal.png';
import goldMedal from '../../assets/gold_medal.png';
import silverMedal from '../../assets/silver_medal.png';
import bronzeMedal from '../../assets/bronze_medal.png';

import {
  ContainerContent,
  ContainerMedals,
  ContainerPage,
  Section,
  Text,
  Title,
} from './styles';

const About = () => {
  return (
    <ContainerPage>
      <Header />

      <ContainerContent>
        <Section>
          <Title>Sobre</Title>

          <Text>
            Este ranking consiste em questões resolvidas no site{' '}
            <a
              href="https://cses.fi/problemset/"
              target="_blank"
              rel="noreferrer"
            >
              CSES
            </a>{' '}
            por integrantes do grupo UnBalloon.
          </Text>

          <Text>
            Para inserir seu nome no ranking, crie uma conta no site{' '}
            <a
              href="https://cses.fi/problemset/"
              target="_blank"
              rel="noreferrer"
            >
              CSES
            </a>{' '}
            e mande uma mensagem no{' '}
            <a href="https://t.me/tilnoene" target="_blank" rel="noreferrer">
              Telegram
            </a>{' '}
            ou Discord (tilnoene#5846 ou Lia♡#7079).
          </Text>

          <Text>
            Para receber seu bottom físico, participe de alguma maratona
            presencial e fale com os organizadores (Alberto ou Tiago).
          </Text>
        </Section>

        <Section>
          <Title>Rankings</Title>

          <br />

          <ContainerMedals>
            <MedalCard
              name="Bronze"
              description="50 questões"
              src={bronzeMedal}
              alt="Medalha de Bronze"
            />

            <MedalCard
              name="Prata"
              description="125 questões"
              src={silverMedal}
              alt="Medalha de Prata"
            />

            <MedalCard
              name="Ouro"
              description="200 questões"
              src={goldMedal}
              alt="Medalha de Ouro"
            />

            <MedalCard
              name="Diamante"
              description="275 questões"
              src={diamondMedal}
              alt="Medalha de Diamante"
            />

            <MedalCard
              name="???"
              description="???"
              src={emeraldMedal}
              alt="???"
            />
          </ContainerMedals>
        </Section>
      </ContainerContent>

      <Footer />
    </ContainerPage>
  );
};

export default About;

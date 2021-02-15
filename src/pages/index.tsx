import Head from 'next/head'

import { ChallengeBox } from '../components/ChallengeBox';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css'
import { GetServerSideProps } from 'next';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({ level, currentExperience, challengesCompleted}: HomeProps) {
  return (
    <ChallengesProvider
      level={level} 
      currentExperience={currentExperience} 
      challengesCompleted={challengesCompleted}
    >
      <CountdownProvider>
        <main className={styles.container}>
          <Head>
            <title>move.it | Início</title>
          </Head> 

          <ExperienceBar />

          <section>
            <div className={styles.cycleContainer}>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <ChallengeBox />
          </section>
        </main>
      </CountdownProvider>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, currentExperience, challengesCompleted } = req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
};
import { useChallenges } from "../hooks/useChallenges";

import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  const { challengesCompleted } = useChallenges();

  return (
    <div className={styles.completedChallenges}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
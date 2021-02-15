import { useChallenges } from '../hooks/useChallenges';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" />
        </button>
      </div>
    </div>
  );
}
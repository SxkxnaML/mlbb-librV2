import styles from './HeroCard.module.css'

export default function HeroCard({ name, role, lane, img }) {
  return (
    <div className={styles.heroCard}>
      <img className={styles.heroImage} src={img} alt={name} />
      <div className={styles.heroContent}>
        <h3 className={styles.heroName}>{name}</h3>
        <p className={styles.heroRole}>{role}</p>
        <span className={styles.heroLane}>{lane}</span>
      </div>
    </div>
  )
}

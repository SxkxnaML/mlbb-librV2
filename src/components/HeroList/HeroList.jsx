import HeroCard from '../HeroCard/HeroCard.jsx'
import styles from './HeroList.module.css'

export default function HeroList({ heroes }) {
  const hasFilteredHeroes = heroes.length > 0

  return (
    <>
      {hasFilteredHeroes ? (
        <div className={styles.heroesList}>
          {heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              name={hero.name}
              role={hero.role}
              lane={hero.lane}
              img={hero.img}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h4 className={styles.emptyStateTitle}>Пусто</h4>
          <p className={styles.emptyStateText}>
            По вашему запросу ничего не найдено
          </p>
        </div>
      )}
    </>
  )
}

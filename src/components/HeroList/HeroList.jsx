import HeroCard from '../HeroCard/HeroCard.jsx'
import heroes from '../../data/mock-heroes.js'
import styles from './HeroList.module.css'

export default function HeroList({ heroSearch, roleSearch }) {
  const filteredHeroes = heroes.filter((hero) => {
    const nameMatches = hero.name
      .toLowerCase()
      .includes(heroSearch.toLowerCase())
    const roleMatches = hero.role === roleSearch || roleSearch === 'All'
    return nameMatches && roleMatches
  })

  const hasFilteredHeroes = filteredHeroes.length > 0
  return (
    <>
      {hasFilteredHeroes ? (
        <div className={styles.heroesList}>
          {filteredHeroes.map((hero) => (
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

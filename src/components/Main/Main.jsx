import styles from './Main.module.css'
import { useState } from 'react'
import heroes from '../../data/mock-heroes.js'
import HeroCard from '../HeroCard/HeroCard.jsx'

export default function Main() {
  const [showHeroesList, setShowHeroesList] = useState(false)

  const [heroSearch, setHeroSearch] = useState('')

  const [roleSearch, setRoleSearch] = useState('All')

  const handleToggleHeroesList = () => {
    setShowHeroesList((prevShowHeroesList) => !prevShowHeroesList)
  }

  const filteredHeroes = heroes.filter((hero) => {
    const nameMatches = hero.name
      .toLowerCase()
      .includes(heroSearch.toLowerCase())
    const roleMatches = hero.role === roleSearch || roleSearch === 'All'
    return nameMatches && roleMatches
  })

  const hasFilteredHeroes = filteredHeroes.length > 0

  const roleList = [
    'All',
    'Assassin',
    'Marksman',
    'Mage',
    'Fighter',
    'Kolbaska',
  ]

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Добро пожаловать!</h2>
        <p className={styles.text}>
          Познакомься с героями <strong>Mobile Legends</strong>, изучай их роли
          и находи персонажей, которые подходят именно тебе.
        </p>

        <button onClick={handleToggleHeroesList} className={styles.button}>
          {showHeroesList ? 'Скрыть героев' : 'Показать героев'}
        </button>

        {showHeroesList && (
          <>
            <input
              className={styles.input}
              type="text"
              placeholder="Введите имя героя"
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
            />

            <select
              className={styles.select}
              value={roleSearch}
              onChange={(e) => setRoleSearch(e.target.value)}
            >
              {roleList.map((role) => (
                <option value={role}>{role}</option>
              ))}
            </select>

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
        )}
      </div>
    </main>
  )
}

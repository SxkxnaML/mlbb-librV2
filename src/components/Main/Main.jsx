import styles from './Main.module.css'
import { useState } from 'react'
import heroes from '../../data/mock-heroes.js'
import HeroCard from '../HeroCard/HeroCard.jsx'

export default function Main() {
  const [showHeroesList, setShowHeroesList] = useState(false)

  const [heroSearch, setHeroSearch] = useState('')

  const handleToggleHeroesList = () => {
    setShowHeroesList((prevShowHeroesList) => !prevShowHeroesList)
  }

  const filteredHeroes = heroes.filter((el) =>
    el.name.toLowerCase().includes(heroSearch.toLowerCase()),
  )

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
          <input
            className={styles.input}
            type="text"
            placeholder="Введите имя героя"
            value={heroSearch}
            onChange={(e) => setHeroSearch(e.target.value)}
          />
        )}

        {filteredHeroes.length < 1 && (
          <div className={styles.emptyState}>
            <h4 className={styles.emptyStateTitle}>Пусто</h4>
            <p className={styles.emptyStateText}>
              По вашему запросу ничего не найдено
            </p>
          </div>
        )}

        {showHeroesList && (
          <div className={styles.heroesList}>
            {filteredHeroes.map((el) => (
              <HeroCard
                name={el.name}
                role={el.role}
                lane={el.lane}
                img={el.img}
                key={el.id}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

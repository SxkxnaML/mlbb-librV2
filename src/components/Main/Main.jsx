import styles from './Main.module.css'
import { useState } from 'react'
import heroes from '../../data/mock-heroes.js'
import HeroCard from '../HeroCard/HeroCard.jsx'

export default function Main() {
  const [showHeroesList, setShowHeroesList] = useState(false)

  const handleToggleHeroesList = () => {
    setShowHeroesList((prevShowHeroesList) => !prevShowHeroesList)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Всем привет!</h2>
        <p className={styles.text}>Здесь будет моя библиотека героев MLBB!</p>

        <button onClick={handleToggleHeroesList} className={styles.button}>
          {showHeroesList ? 'Скрыть героев' : 'Показать героев'}
        </button>

        {showHeroesList && (
          <div className={styles.heroesList}>
            {heroes.map((el) => (
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

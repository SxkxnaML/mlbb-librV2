import styles from './Main.module.css'
import { useState } from 'react'
import HeroSearch from '../HeroSearch/HeroSearch.jsx'
import HeroList from '../HeroList/HeroList.jsx'
import MainIntro from '../MainIntro/MainIntro.jsx'
import heroes from '../../data/mock-heroes.js'

export default function Main() {
  const [showHeroesList, setShowHeroesList] = useState(false)

  const [heroSearch, setHeroSearch] = useState('')

  const [roleSearch, setRoleSearch] = useState('All')

  const filteredHeroes = heroes.filter((hero) => {
    const nameMatches = hero.name
      .toLowerCase()
      .includes(heroSearch.toLowerCase())
    const roleMatches = hero.role === roleSearch || roleSearch === 'All'
    return nameMatches && roleMatches
  })

  const handleToggleHeroesList = () => {
    setShowHeroesList((prevShowHeroesList) => !prevShowHeroesList)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainIntro
          toggleHeroesList={handleToggleHeroesList}
          showHeroesList={showHeroesList}
        />

        {showHeroesList && (
          <>
            <HeroSearch
              heroSearch={heroSearch}
              roleSearch={roleSearch}
              setHeroSearch={setHeroSearch}
              setRoleSearch={setRoleSearch}
            />
            <HeroList heroes={filteredHeroes} />
          </>
        )}
      </div>
    </main>
  )
}

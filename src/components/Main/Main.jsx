import styles from './Main.module.css'
import { useState } from 'react'
import HeroSearch from '../HeroSearch/HeroSearch.jsx'
import HeroList from '../HeroList/HeroList.jsx'
import MainIntro from '../MainIntro/MainIntro.jsx'

export default function Main() {
  const [showHeroesList, setShowHeroesList] = useState(false)

  const [heroSearch, setHeroSearch] = useState('')

  const [roleSearch, setRoleSearch] = useState('All')

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
            <HeroList heroSearch={heroSearch} roleSearch={roleSearch} />
          </>
        )}
      </div>
    </main>
  )
}

import styles from './HeroSearch.module.css'

const roleList = ['All', 'Assassin', 'Marksman', 'Mage', 'Fighter', 'Kolbaska']

export default function HeroSearch({
  heroSearch,
  roleSearch,
  setHeroSearch,
  setRoleSearch,
}) {
  const isResetDesabled = heroSearch === '' && roleSearch === 'All'

  const handleResetFilters = () => {
    setHeroSearch('')
    setRoleSearch('All')
  }

  return (
    <div className={styles.controls}>
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
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <button
        className={styles.resetButton}
        type="button"
        disabled={isResetDesabled}
        onClick={handleResetFilters}
      >
        Сброс
      </button>
    </div>
  )
}

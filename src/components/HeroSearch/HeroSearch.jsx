import styles from './HeroSearch.module.css'

const roleList = ['All', 'Assassin', 'Marksman', 'Mage', 'Fighter', 'Kolbaska']

export default function HeroSearch({
  heroSearch,
  roleSearch,
  setHeroSearch,
  setRoleSearch,
  topHeroes,
  setTopHeroes,
}) {
  const isResetDisabled =
    heroSearch === '' && roleSearch === 'All' && !topHeroes

  const handleToggleTopTier = () =>
    setTopHeroes((prevTopHeroes) => !prevTopHeroes)

  const handleResetFilters = () => {
    setHeroSearch('')
    setRoleSearch('All')
    setTopHeroes(false)
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
        disabled={isResetDisabled}
        onClick={handleResetFilters}
      >
        Сброс
      </button>
      <button
        className={`${styles.topTierToggle} ${topHeroes ? styles.topTierToggleActive : ''}`.trim()}
        aria-pressed={topHeroes}
        onClick={handleToggleTopTier}
        type="button"
      >
        <span className={styles.toggleText}>
          <span className={styles.toggleLabel}>Топ герои</span>
          <span className={styles.toggleCaption}>
            {topHeroes
              ? 'Показываются только топовые герои'
              : 'Нажми, чтобы включить фильтр'}
          </span>
        </span>
        <span className={styles.toggleTrack} aria-hidden="true">
          <span className={styles.toggleThumb}></span>
        </span>
      </button>
    </div>
  )
}

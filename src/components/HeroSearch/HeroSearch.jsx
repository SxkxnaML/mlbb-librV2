import styles from './HeroSearch.module.css'

export default function HeroSearch({
  heroSearch,
  roleSearch,
  setHeroSearch,
  setRoleSearch,
}) {
  const roleList = [
    'All',
    'Assassin',
    'Marksman',
    'Mage',
    'Fighter',
    'Kolbaska',
  ]
  return (
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
    </>
  )
}

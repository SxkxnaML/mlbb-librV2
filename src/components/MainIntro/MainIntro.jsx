import styles from './MainIntro.module.css'

export default function MainIntro({ toggleHeroesList, showHeroesList }) {
  return (
    <>
      <h2 className={styles.heading}>Добро пожаловать!</h2>
      <p className={styles.text}>
        Познакомься с героями <strong>Mobile Legends</strong>, изучай их роли и
        находи персонажей, которые подходят именно тебе.
      </p>

      <button onClick={toggleHeroesList} className={styles.button}>
        {showHeroesList ? 'Скрыть героев' : 'Показать героев'}
      </button>
    </>
  )
}

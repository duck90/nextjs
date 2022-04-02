import styles from './ContentWrap.module.scss'

export default function ContentWrap(props: any) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>

  )
}
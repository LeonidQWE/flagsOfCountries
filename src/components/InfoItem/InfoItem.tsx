import styles from './InfoItem.module.scss';

interface InfoItemProps {
  name: string;
  value: string | number
}

export const InfoItem = ({name, value}: InfoItemProps) => {
  return (
    <li>
      <span className={styles.itemName}>{name}: </span>
      <span className={styles.itemValue}>{value}</span>
    </li>
  )
}

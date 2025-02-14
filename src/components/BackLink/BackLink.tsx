import { FaArrowLeft } from 'react-icons/fa';
import styles from './BackLink.module.scss';
import { useNavigate } from 'react-router-dom';

export const BackLink = () => {
  const navigate = useNavigate();

  const handleClickBackLink = () => {
    navigate(-1);
  }

  return (
    <div onClick={handleClickBackLink}>
      <FaArrowLeft className={styles.icon}/>
    </div>
  )
}

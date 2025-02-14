import styles from './Image.module.scss';

interface ImageProps {
  size: string;
  srcImg: string;
  altImg: string;
}

export const Image = ({size, srcImg, altImg}: ImageProps) => {
  const sizeImg = styles[size];

  return (
    <div className={`${sizeImg}`}>
      <img src={srcImg} alt={altImg} />
    </div>
  )
}

import styles from "./banner.module.css"

type Bannerprops = {
  src: string;
  alt: string;
};

const Banner = ({ src, alt }: Bannerprops) => {
  return <img src={src} alt={alt} className={styles.banner}/>
};

export  default Banner

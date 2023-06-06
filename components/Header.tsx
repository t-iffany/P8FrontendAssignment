import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/p8Wordmark_sm.svg" alt="logo" width={120} height={40} />
      <MenuRoundedIcon fontSize="large" />
    </div>
  );
};

export default Header;
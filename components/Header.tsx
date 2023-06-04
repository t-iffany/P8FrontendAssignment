import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Header: React.FC = () => {
  return (
    <div>
      <Image src="/p8Wordmark_sm.svg" alt="logo" width={120} height={40} />
      <MenuRoundedIcon />
    </div>
  );
};

export default Header;
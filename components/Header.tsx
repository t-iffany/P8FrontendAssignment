import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div>
      <Image src="/p8Wordmark_sm.svg" alt="logo" width={120} height={40} />
    </div>
  );
};

export default Header;
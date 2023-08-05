import Image from 'next/image';
import logo from 'public/logo.png';

type Props = {
  width: number;
  height: number;
};

export default function Logo(props: Props) {
  const { width, height } = props;
  return <Image src={logo} width={width} height={height} alt="vs. notes logo" />;
}

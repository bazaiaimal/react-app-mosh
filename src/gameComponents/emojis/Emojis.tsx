import bullsEys from '../bullysEye.jpg';
import thumbsUp from '../thumb.png';
import meh from '../meh.png';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}


const Emojis = ({rating}: Props) => {

  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps} = {
    3: { src: meh, alt: 'meh' , boxSize: '25px'},
    4: { src: thumbsUp, alt: 'recommended' , boxSize: '25px'},
    5: { src: bullsEys, alt: 'exceptional' , boxSize: '25px'},
  }

  return (
    <>
    <Image { ...emojiMap[rating]} marginTop={3} borderRadius={7}/>
    </>
  )
}

export default Emojis;

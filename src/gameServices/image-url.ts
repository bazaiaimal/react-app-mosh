import noImage from '../assets/blank image.png';

const imageUrl = (imgUrl: string) => {

  if( !imgUrl) return noImage;

  const target = 'media/';
  const index = imgUrl.indexOf(target) + target.length;
  return imgUrl.slice(0, index) + 'crop/600/400/' + imgUrl.slice(index);
}

export default imageUrl;

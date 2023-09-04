import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../gameHooks/useGames'
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface IconListProps {
    platforms: Platform[];
}

const PlatformIconList = ( { platforms }: IconListProps) => {

    const iconMap: { [ key: string ]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintondo: SiNintendo,
        web: BsGlobe,
    }

  return (
    <HStack marginY={1}>
    { platforms.map( ( platforms ) => 
    (
        <Icon key={platforms.id} as = { iconMap[ platforms.slug ]} color={'gray.500'}/>
    ))}
    </HStack>
  )
}

export default PlatformIconList;
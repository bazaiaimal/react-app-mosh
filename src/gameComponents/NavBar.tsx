import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gameLogo.jpg';
import { ColorModeSwitch } from './ColorModeSwitch';
import SearchInput from './searchInput/SearchInput';

interface Props {
  onSearch: (searchText: string) => void; 
}

const NavBar = ( {onSearch}: Props) => {
  return (
    <>
      <HStack padding='20px'>
        <Image src={logo} boxSize={'60px'} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar;
import useGenres, { GenresProps } from '../gameHooks/useGenres';
import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import imageUrl from '../gameServices/image-url';

interface FilterProps {
    onSelectGenre: (genre: GenresProps) => void;
    selectedGenre: GenresProps | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: FilterProps) => {

    const { data, isLoading, error } = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize='3xl' marginLeft={3} marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} objectFit='cover' src={imageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : ''} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'> {genre.name} </Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenreList;
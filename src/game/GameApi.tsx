import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { GameGrid } from '../gameComponents/GameGrid';
import GenreList from '../gameComponents/GenreList';
import { useState } from 'react';
import { GenresProps } from '../gameHooks/useGenres';
import PlatformSelector from '../gameComponents/PlatformSelector';
import { Platform } from '../gameHooks/useGames';
import SortSelector from '../gameComponents/sortSelectorComponent/SortSelector';
import NavBar from '../gameComponents/NavBar';
import GameHeading from '../gameComponents/gameHeading/GameHeading';


export interface GameQuery {
    genre: GenresProps | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}


export const GameApi = () => {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <>
            <Grid templateAreas={
                {
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`
                }}
                templateColumns={
                    {
                        base: '1fr',
                        lg: '300px 1fr'
                    }}>
                <GridItem area='nav'>
                    <NavBar onSearch={ (searchText) => setGameQuery({...gameQuery, searchText})} />
                </GridItem>
                <Show above="lg">
                    <GridItem area='aside' paddingY={5}>
                        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
                    </GridItem>
                </Show>
                <GridItem area='main'>
                        <Box marginLeft={2}>
                            <GameHeading gameQuery={gameQuery}/>
                            <HStack marginBottom={2}>
                                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
                                <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={ (sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
                            </HStack>
                        </Box>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </>
    )
}

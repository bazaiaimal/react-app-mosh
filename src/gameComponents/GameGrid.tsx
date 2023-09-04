import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../gameHooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../game/GameApi";

interface ToFilterGridGameProps {
  gameQuery: GameQuery;
}

export const GameGrid = ( { gameQuery}: ToFilterGridGameProps) => {

  const { data, error, isLoading } = useGames( gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text className="text-danger">{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding='10px'>

        {isLoading && skeletons.map(skeleton =>
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>)}

        {
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard gamePara={game} />
            </GameCardContainer>
          ))
        }
        
      </SimpleGrid>
    </>
  )
}

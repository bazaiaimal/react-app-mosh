import { Game } from '../gameHooks/useGames';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import imageUrl from '../gameServices/image-url';
import Emojis from './emojis/Emojis';


interface GameProps {
    gamePara: Game;
}

const GameCard = ({ gamePara }: GameProps) => {
    return (
        <>
            <Card height='100%'>
                <Image src={imageUrl(gamePara.background_image)} />
                <CardBody>
                    <HStack justifyContent='space-between' marginBottom={3}>
                        <PlatformIconList platforms={gamePara.parent_platforms.map(p => p.platform)} />
                        <CriticScore score={gamePara.metacritic} />
                    </HStack>
                    <Heading fontSize='2xl'>{gamePara.name} <Emojis rating={gamePara.rating_top} /> </Heading>
                </CardBody>
            </Card>
        </>
    )
}

export default GameCard;
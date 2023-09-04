import { Badge } from "@chakra-ui/react";

interface ScoreProps {
  score: number;
}

const CriticScore = ({ score }: ScoreProps) => {

  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <>
      <Badge colorScheme={color} fontSize='20px' paddingX={2} borderRadius='6px'>
        {score}
      </Badge>
    </>
  )
}

export default CriticScore;
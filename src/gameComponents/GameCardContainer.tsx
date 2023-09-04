import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface CardConProps {
    children: ReactNode;
}

const GameCardContainer = ( { children }: CardConProps) => {
  return (
    <Box height='100%' borderRadius={20} overflow='hidden'>
        { children }
    </Box>
  )
}

export default GameCardContainer;
import React from "react"
import StyledCharacteristicCard from "./styles"

interface CharacteristicCardType {
  characteristicTitle: string
  characteristicDescription: string
}

const CharacteristicCard: React.FC<CharacteristicCardType> = ({
  characteristicTitle,
  characteristicDescription,
}) => {
  return (
    <StyledCharacteristicCard>
      <h5>{characteristicTitle}</h5>
      <p>{characteristicDescription}</p>
    </StyledCharacteristicCard>
  )
}

export default CharacteristicCard

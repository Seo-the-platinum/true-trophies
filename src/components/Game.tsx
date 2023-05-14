import React from 'react'
import Image from 'next/image'
import { api } from '~/utils/api'

const Game = ({ game, accountId }: GameProps) => {
  const { data: gameDetails } = api.game.getGameDetails.useQuery(
    {userId: accountId, gameId:game.npCommunicationId, options:game.npServiceName}, 
    {enabled: !!game.npCommunicationId}
  )
  console.log(gameDetails)
  return (
    <div>
      <p>{game.trophyTitleName}</p>
      <Image 
        alt={`${game.trophyTitleName} trophy icon`} 
        height={68} 
        src={game.trophyTitleIconUrl}
        width={68}/>
      <p className='text-white text-xl'>{`+${game.earnedTrophies.platinum}`}</p>
    </div>
  )
}

export default Game
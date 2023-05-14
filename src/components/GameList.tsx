import React from 'react'
import Game from './Game'

const GameList = ({ gameList, accountId }: GameListProps) => {
  if(!gameList) return null
  return (
    <div>
        {gameList.map((game) => <Game key={game.npCommunicationId} game={game} accountId={accountId}/>)}
    </div>
  )
}

export default GameList
import React from 'react'
import Game from './Game'

const GameList = ({ gameList, accountId }: GameListProps) => {
  return (
    <div>
        {gameList.map((game) => <Game key={game.npCommunicationId} game={game} accountId={accountId}/>)}
    </div>
  )
}

export default GameList
import React from 'react'
import Image from 'next/image'
import GameList from './GameList'

const User = ({ user }: UserProps) => {
    if (!user) return null
  return (
    <div>
        <div className='flex border-2 border-slate-100 rounded-lg'>
            { user?.avatarUrl && <Image src={user.avatarUrl} alt='profile thumbnail' width={68} height={68}/>}
            <div className='flex flex-col items-end'>
                <div className='rounded-full bg-red-600 aspect-square w-8 flex items-center justify-center'>
                    <h3>{100}</h3>
                </div>
                <h1 className='self-end text-xl text-slate-100'>{user.onlineId}</h1>
            </div>
        </div>
        {user.accountId ? <GameList gameList={user.games} accountId={user.accountId}/> :
         <p className='text-slate-100 text-lg'>This User does not have any games to show or has them set to private</p>}
    </div>
  )
}

export default User
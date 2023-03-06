import { Avatar, Box } from '@primer/react'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import { BookIcon, MarkGithubIcon, TrophyIcon } from '@primer/octicons-react'

function WallOfPunkStorytellers() {
    const app = useContext(AppContext)
    return (
        <Box className='min-h-screen'>
            <h1 className='text-4xl font-bold mb-2'>Wall Of Punk Storytellers</h1>
            <p className='text-2xl font-light'>Welcome to the <span className="font-bold text-purple-700">Wall of Punk</span>, where every storyteller is a rebel with a cause, using their <span className="font-bold text-purple-700">knowledge</span> to <s>smash the status quo and</s> ignite a <span className="font-bold text-purple-700">revolution of new ideas</span>.</p>
            <Box className='flex align-middle gap-3 my-5'>
                {app.contributors.map((punk, index) => (
                    <Link to={punk.html_url} target='_blank' title={punk.username} key={index}>
                        <Box className='flex align-middle gap-4 hover:bg-purple-700 hover:delay-150 hover:text-zinc-50 p-3 rounded-md'>
                            <Avatar square src={`https://avatars.githubusercontent.com/${punk.username}`} size={100} alt={punk.username} />
                            <Box className='flex align-middle flex-col'>
                                <span className='font-bold uppercase'>
                                    <MarkGithubIcon className='mr-1' />
                                    <span className='mx-2'>&mdash;</span>
                                    <span>{punk.username}</span>
                                </span>
                                <span>
                                    <BookIcon className='mr-1' />
                                    <span className='mx-2'>&mdash;</span>
                                    <span>4 Stories</span>
                                </span>
                                <span>
                                    <TrophyIcon className='mr-1' />
                                    <span className='mx-2'>&mdash;</span>
                                    <span>Kids</span>
                                </span>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

export default WallOfPunkStorytellers

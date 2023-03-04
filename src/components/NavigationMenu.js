import { GitBranchIcon, MarkGithubIcon, PeopleIcon, TagIcon } from '@primer/octicons-react'
import { CounterLabel, Header, StyledOcticon } from '@primer/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../routes/menu'
import { getAllContributors } from '../services/ConstributorService'

function NavigationMenu() {
    const [totalContributors, setTotalContributors] = useState(0)

    useEffect(() => {
        const contributors = async () => {
            const data = await getAllContributors()
            setTotalContributors(data.length)
        }
        contributors()
    }, [])

    return (
        <Header>
            <Header.Item>
                <Link to='/' className='flex align-middle font-bold text-white hover:text-zinc-300'>
                    <StyledOcticon icon={MarkGithubIcon} size={32} sx={{ mr: 2 }} />
                    <span className='pt-1'>Street Community Programmer</span>
                </Link>
            </Header.Item>
            {menu.map((route, i, row) => {
                if (i + 1 !== row.length) {
                    return (
                        <Header.Item key={i}>
                            <Link to={route.path} className=' font-bold text-white hover:text-zinc-300'>{route.title}</Link>
                        </Header.Item>
                    )
                } else {
                    return (
                        <Header.Item full key={i}>
                            <Header.Link href={'#'}>
                                <Link to={route.path} className=' font-bold text-white hover:text-zinc-300'>{route.title}</Link>
                            </Header.Link>
                        </Header.Item>
                    )
                }
            })}
            <Header.Item>
                <Link className='font-bold text-white hover:text-zinc-300'>
                    <StyledOcticon icon={PeopleIcon} size={16} sx={{ mr: 2 }} />
                    <span><CounterLabel>{totalContributors}</CounterLabel> Contributors</span>
                </Link>
            </Header.Item>
            <Header.Item>
                <Link className='font-bold text-white hover:text-zinc-300'>
                    <StyledOcticon icon={GitBranchIcon} size={16} sx={{ mr: 2 }} />
                    <span>Contribute</span>
                </Link>
            </Header.Item>
            <Header.Item mr={0}>
                <Link className='font-bold text-white hover:text-zinc-300'>
                    <StyledOcticon icon={TagIcon} size={16} sx={{ mr: 2 }} />
                    <span>v{import.meta.env.APP_VERSION}</span>
                </Link>
            </Header.Item>
        </Header>
    )
}

export default NavigationMenu

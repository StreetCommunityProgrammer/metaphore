import { GitBranchIcon, MarkGithubIcon } from '@primer/octicons-react'
import { Header, StyledOcticon } from '@primer/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../routes/menu'

function NavigationMenu() {
    return (
        <Header>
            <Header.Item>
                <Header.Link href="#" fontSize={2}>
                    <Link to='/' className='flex align-middle'>
                        <StyledOcticon icon={MarkGithubIcon} size={32} sx={{ mr: 2 }} />
                        <span className='pt-1'>Street Community Programmer</span>
                    </Link>
                </Header.Link>
            </Header.Item>
            {menu.map((route, i, row) => {
                if (i + 1 !== row.length) {
                    return (
                        <Header.Item key={i}>
                            <Header.Link href={'#'}>
                                <Link to={route.path}>{route.title}</Link>
                            </Header.Link>
                        </Header.Item>
                    )
                } else {
                    return (
                        <Header.Item full key={i}>
                            <Header.Link href={'#'}>
                                <Link to={route.path}>{route.title}</Link>
                            </Header.Link>
                        </Header.Item>
                    )
                }
            })}
            <Header.Item mr={0}>
                <Header.Link>
                    <StyledOcticon icon={GitBranchIcon} size={16} sx={{ mr: 2 }} />
                    <span>Contribute</span>
                </Header.Link>
            </Header.Item>
        </Header>
    )
}

export default NavigationMenu

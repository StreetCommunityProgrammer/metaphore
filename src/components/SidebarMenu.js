import { BookIcon, CodeReviewIcon } from '@primer/octicons-react'
import { Heading, NavList, PageLayout } from '@primer/react'
import React from 'react'
import { sidebar } from '../routes/sidebar'
import { Link } from 'react-router-dom'

function SidebarMenu() {
    return (
        <PageLayout.Pane
            divider="line"
            padding="normal"
            position="start"
            sticky
        >
            <Heading as="h3" id="stories-heading" sx={{ fontSize: 2 }}>
                <BookIcon size={17} className='mr-2' />
                <span>Stories</span>
            </Heading>
            <NavList>
                {sidebar.map((route, index) => (
                    <NavList.Item href='#' key={index}>
                        <Link to={route.path}>
                            <NavList.LeadingVisual>
                                <CodeReviewIcon />
                            </NavList.LeadingVisual>
                            <span className='font-bold text-slate-900'>{route.title}</span>
                        </Link>
                    </NavList.Item>
                ))}
            </NavList>
        </PageLayout.Pane>
    )
}

export default SidebarMenu

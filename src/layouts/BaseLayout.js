import React from 'react'
import { Box, PageLayout } from "@primer/react"
import { Outlet } from 'react-router-dom'
import NavigationMenu from '../components/NavigationMenu'
import SidebarMenu from '../components/SidebarMenu'
import Footer from '../components/Footer'

function BaseLayout() {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateRows: 'auto 1fr auto',
                height: '100vh'
            }}
        >
            <NavigationMenu />
            <Box
                sx={{
                    overflow: 'auto'
                }}
            >
                <PageLayout
                    columnGap="none"
                    containerWidth="full"
                    padding="none"
                    rowGap="none"
                >
                    <PageLayout.Content
                        padding="normal"
                        width="large"
                    >
                        <Outlet />
                    </PageLayout.Content>
                    <SidebarMenu />
                    <Footer />
                </PageLayout>
            </Box>
        </Box>
    )
}

export default BaseLayout

import { PageLayout } from '@primer/react'
import React from 'react'
import Placeholder from './Placeholder'

function Footer() {
    return (
        <PageLayout.Footer
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingY: 3, backgroundColor: 'rgb(22, 27, 34)' }}
        >
            <Placeholder label={<span className='text-slate-50 text-sm'>Street Community Programmer - Made for Developer with ❤️</span>} height={15} />
        </PageLayout.Footer>
    )
}

export default Footer

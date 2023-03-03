import { Box } from '@primer/react'
import React from 'react'

export default function Placeholder({ width, height, id, label }) {
    return (
        <Box
            id={id}
            sx={{
                width: width ?? '100%',
                height,
                display: 'grid',
                placeItems: 'center'
            }}
        >
            {label}
        </Box>
    )
}

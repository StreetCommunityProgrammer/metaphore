import { Pagehead } from '@primer/react'
import React, { Fragment } from 'react'
import metaphorBanner from '../assets/metaphor.png'

function Home() {
    return (
        <Fragment>
            <Pagehead>
                <h1 className='text-center text-4xl font-medium'>Street Community Programmer (SCP)</h1>
                <h2 className='text-center text-2xl font-light'>Story as Code. Public Collections of Metaphor our Freestylers accross the world. Gain knowledge with unusual perspective from our Punk members.</h2>
                <p className='my-5 flex align-middle justify-center gap-2'>
                    <img src="https://img.shields.io/github/issues-closed/StreetCommunityProgrammer/metaphore/metaphore?color=sky&label=Total%20Published%20Metaphor%20Stories&style=flat-square" alt="Total Published Metaphor Stories" />
                    <img src="https://img.shields.io/github/issues/StreetCommunityProgrammer/metaphore/metaphore?color=blue&label=Total%20Pending%20Metaphors&style=flat-square" alt="Total Pending Metaphors" />
                    <a href="https://github.com/StreetCommunityProgrammer/metaphore/issues?q=is%3Aopen+is%3Aissue+label%3Apunk%3A%3Aidea" target='_blank'>
                        <img src="https://img.shields.io/github/issues/StreetCommunityProgrammer/metaphore/punk::idea?color=%235BFAF7&label=Total%20Punk%20Idea&style=flat-square" alt="Total Punk Ideas" />
                    </a>
                </p>
                <img src={metaphorBanner} alt="Metaphor" className='w-full mb-2' />
            </Pagehead>
            <div className="prose max-w-none">
                <h3 className='prose-h1'>Prologue</h3>

                <p><span className='text-4xl'>H</span>ello Punk! We are street programmer that work out of the box in everyway of traditional theory and we're not calling snippet of code but called as Metaphor.</p>

                <p>Programming languages are essentially bridges for communicating with people around the world without knowing their native language. We can collaborate with each other despite not sharing a common language.</p>

                <p>Our members are called Punks, Freestylers, and Software Freestyle Engineers, who create metaphors to make the world a better place.</p>

                <p>Every Punk can contribute their own unique style and unusual code snippets metaphor that challenge traditional theory or conventional business practics. But, it work! That’s what being a Punk Freestyle Engineer is all about. Welcome to the Street Community Programmer.</p>
            </div>
        </Fragment>
    )
}

export default Home

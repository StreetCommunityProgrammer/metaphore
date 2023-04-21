import Meta from '@/components/Meta';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { NEXT_APP_NAME, NEXT_BASE_URL } from '@/constants/app-config';

export default function PaperDocs() {
    const router = useRouter();
    const currentUrl = router.asPath;
    return (
        <>
            <Meta />
            <NextSeo
                title={`The Paper Docs | ${NEXT_APP_NAME}`}
                description="Welcome to the Street Community Programmer, this is our PaperDocs and you can follow our culture."
                openGraph={{
                    type: 'website',
                    locale: 'en_US',
                    url: NEXT_BASE_URL + currentUrl,
                    siteName: NEXT_APP_NAME
                }}
            />
            <section className="min-h-[calc(100vh-100px)]">
                <header className='flex items-center justify-center bg-zinc-800 h-60'>
                    <h1 className='text-zinc-50 text-4xl font-bold'>The Paper Docs</h1>
                </header>
                <div className="px-3 py-5 w-full sm:w-9/12 mx-auto">
                    <h2 className='text-3xl font-bold my-3'>💡 What is Metaphore?</h2>
                    <p className='text-2xl'>Metaphore is an open-source collection project on GitHub that aims to create a community-driven platform for sharing software metaphors that can be used in different contexts, such as education, communication, DIY,  and storytelling.</p>
                    <h2 className='text-3xl font-bold my-3'>💡 How does it work?</h2>
                    <p className='text-2xl'>You can submit metaphors through a Github Issue template and browse existing ones on the website, or directly from GitHub. You can also react to a metaphor, helping to surface the best ones for everyone to see.</p>
                    <h3 className='text-2xl font-bold my-3'>1. Visit our GitHub Repository</h3>
                    <p className='mb-1 text-2xl'>You can submit metaphors through a <a href="https://github.com/StreetCommunityProgrammer/metaphore/issues/new/choose" target='_blank' className='link link-primary'>GitHub Issue template</a>, select your story category.</p>
                    <img src="https://i.imgur.com/joLnufb.png" alt="Step Visited" className='w-full my-3' />
                    <ol className='list-decimal my-3 ml-5 text-2xl'>
                        <li>Visit our <a href="https://github.com/StreetCommunityProgrammer" target='_blank' className='link link-primary'>GitHub Repository</a> or choose directly via <a href="https://github.com/StreetCommunityProgrammer/metaphore/issues/new/choose" target='_blank' className='link link-primary'>GitHub Issue template</a></li>
                        <li>Click Github Issues Tab</li>
                        <li>Choose your story category template</li>
                    </ol>
                    <h3 className="text-2xl font-bold my-3">2. Write Your Story in GitHub Issue Form</h3>
                    <img src="https://i.imgur.com/x9qOad8.png" alt="Step writing" className='w-full my-3' />
                    <ol className='list-decimal my-3 ml-5 text-2xl'>
                        <li>Enter your metaphore story title</li>
                        <li>Enter your back story about your metaphore story</li>
                        <li>Enter your full story</li>
                        <li>Enter demo link if any (optional)</li>
                        <li>Enter your donation link (optional)</li>
                    </ol>
                    <h3 className="text-2xl font-bold my-3">3. Listing Your Story</h3>
                    <img src="https://i.imgur.com/mkLP1D9.png" alt="Listing your Story" className='w-full my-3' />
                    <p className="my-3 text-2xl">Your story will appear on our issues page and waiting for our team to review your submiting story, after issue is closed, your story will publish in our <a href="https://metaphore.vercel.app/stories" target='_blank' className='link link-primary'>Metaphore Website</a> automaticaly by our metaphore GitHub Action.</p>
                    <img src="https://i.imgur.com/3jpo5SX.png" alt="Your metaphore story" className="w-full my-3" />
                    <p className="my-3 text-2xl">We would love for you to get involved! You can contribute by submitting your own metaphors, reacting to existing ones, and helping us improve the platform. Check out our GitHub repository at <a href="https://github.com/StreetCommunityProgrammer" target='_blank' className='link link-primary'>Street Community Programmer</a> and start contributing today!</p>
                </div>
            </section>
        </>
    );
}

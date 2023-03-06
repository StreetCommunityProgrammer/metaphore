import { Avatar, Box, Breadcrumbs } from '@primer/react'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link, useLocation, useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from '../assets/css/SingleStory.module.css'
import { ClockIcon } from '@primer/octicons-react'
import { format } from 'date-fns'
import useBannerGenerator from '../hooks/useBannerGenerator'
import { Helmet } from 'react-helmet'

function SingleStory() {
    const { storyName } = useParams()
    const location = useLocation()
    const bannerImage = useBannerGenerator(location.state.name.replace('.md', ''), location.state.title)
    return (
        <Box className='min-h-screen'>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>{location.state.title}</title>
                <meta name="title" content={location.state.title} />
                <meta name="description" content={`Metaphor story from ${location.state.author} about ${location.state.title}`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={location.state.title} />
                <meta property="og:description" content={`Metaphor story from ${location.state.author} about ${location.state.title}`} />
                <meta property="og:image" content={bannerImage} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={window.location.href} />
                <meta property="twitter:title" content={location.state.title} />
                <meta property="twitter:description" content={`Metaphor story from ${location.state.author} about ${location.state.title}`} />
                <meta property="twitter:image" content={bannerImage} />
            </Helmet>
            <h1 className='font-medium text-4xl'>{location.state.title}</h1>
            <Breadcrumbs>
                <Breadcrumbs.Item as={Link} to="/">Home</Breadcrumbs.Item>
                <Breadcrumbs.Item as={Link} to="/javascript">Javascript Metaphors</Breadcrumbs.Item>
                <Breadcrumbs.Item as={Link} to={`/javascript/story/${storyName}`} selected>
                    <span className='text-slate-400'>{location.state.title}</span>
                </Breadcrumbs.Item>
            </Breadcrumbs>
            <Box className='flex my-3 gap-2'>
                <Box className='flex gap-2'>
                    <Avatar src={`https://github.com/${location.state.author}.png`} square />
                    <span className='text-sm'>@{location.state.author}</span>
                </Box>
                <Box className='flex gap-2'>
                    <ClockIcon size={18} />
                    <span className='text-sm'>{format(new Date(location.state.created_at), 'yyyy-MM-dd HH:ii:ss')}</span>
                </Box>
            </Box>
            <div className="markdownHtml">
                <ReactMarkdown
                    children={atob(location.state.content)}
                    remarkPlugins={[remarkGfm]}
                    className={styles.markdownHtml}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={nightOwl}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={`${className} bg-slate-900 text-gray-300 p-1 rounded font-semibold text-xs font-mono`} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
            </div>
        </Box>
    )
}

export default SingleStory

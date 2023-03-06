import React from 'react'
import useCollectionOf from '../../hooks/useCollectionOf'
import { Avatar, Box, Button, Spinner, Timeline } from '@primer/react'
import { PencilIcon } from '@primer/octicons-react'
import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'

function CssStories() {
    const { collections, isLoading } = useCollectionOf('css')
    if (isLoading) return <Spinner size="large" />
    return (
        <Box className='min-h-screen'>
            <h1 className='font-light text-4xl mb-2'>CSS Metaphors</h1>
            <p>This page contains any unsual <s>code snippets</s> metaphors from our CSS Punk Member.</p>
            <Button className='p-3 my-3' leadingIcon={PencilIcon} onClick={() => window.open('https://github.com/StreetCommunityProgrammer/metaphore/issues/new?assignees=darkterminal%2Cmkubdev&labels=metaphore%2Ccss&template=create_css_story.yml&title=Your+Story+Title', '_blank')}>Create CSS Story</Button>

            <h2 className='font-medium text-3xl mb-3'>List of Metaphors</h2>
            <Timeline>
                {collections.length > 0 ? collections?.map((story, i) => {
                    const date = new Date(story.created_at);
                    const timeAgo = formatDistanceToNow(date, { addSuffix: true });
                    return (
                        <Timeline.Item key={i}>
                            <Timeline.Badge sx={{ bg: 'transparent' }}>
                                <Avatar src={`https://github.com/${story.author}.png`} size={30} />
                            </Timeline.Badge>
                            <Timeline.Body>
                                <Link to={`/css/story/${story.name}`} state={story}>
                                    <span className='font-bold text-slate-900 hover:text-purple-700'>{story.title}</span>
                                </Link>
                                <span>&mdash; {timeAgo} by {story.author}</span>
                            </Timeline.Body>
                        </Timeline.Item>
                    )
                }) : <span><em>No one tell about their CSS story and write metaphor for us</em> ☹️</span>}
            </Timeline>
        </Box>
    )
}

export default CssStories

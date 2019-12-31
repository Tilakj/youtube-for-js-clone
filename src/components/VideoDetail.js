import React from 'react'
import { Paper, Typography,LinearProgress} from '@material-ui/core'

const VideoDetail = (props) => {
    console.log(props.selectedVideo)
    if (!props.selectedVideo) return  <LinearProgress variant="query" color="secondary" />
    // if (!.isLoading) return <div>Loading...</div>
    const videoSrc = (props.selectedVideo.id.kind === "youtube#video") ? `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}?autoplay=${props.play ? 1 : 0}` : `https://www.youtube.com/embed?listType=playlist&list=${props.selectedVideo.id.playlistId}&autoplay=${props.play ? 1 : 0}`
    console.log(videoSrc)
    return (
        <>
            <Paper elevation={6} style={{ height: '500px' }}>
                <iframe allowFullScreen="allowfullscreen" height="100%" width="100%" frameBorder="0" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">{props.selectedVideo.snippet.title} - {props.selectedVideo.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{props.selectedVideo.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{props.selectedVideo.snippet.description}</Typography>
            </Paper>
        </>
    )
}

export default VideoDetail
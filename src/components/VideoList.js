import React from 'react'
import { Grid, Typography, LinearProgress } from '@material-ui/core'
import VideoItem from './VideoItem'

export default function VideoList(props) {

    if (props.videos.length<=0) return <LinearProgress variant="query" color="secondary" />
    const videoList = props.videos.map((video, i) => <VideoItem key={i} video={video} onVideoSelected={props.onVideoSelected} />)
    return (
        <Grid>
            <Typography gutterBottom variant="h5" component="h2">Top 5 results</Typography>
            {videoList}
        </Grid>
    )
}

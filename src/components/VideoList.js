import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import VideoItem from './VideoItem'

export default function VideoList(props) {

    const videoList = props.videos.map((video, i) => <VideoItem key={i} video={video} onVideoSelected={props.onVideoSelected} />)
    return (
        <Grid>
            <Typography gutterBottom variant="h5" component="h5">Top 5 results</Typography>
            {videoList}
        </Grid>
    )
}

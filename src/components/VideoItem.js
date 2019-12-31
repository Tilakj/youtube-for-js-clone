import React from 'react'
import { CardActionArea, CardContent, CardMedia, Card, Typography } from '@material-ui/core';

const VideoItem = (props) => {
    const { video, onVideoSelected } = props
    return (
        <Card style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => onVideoSelected(video)}>
            <CardActionArea>
                <CardMedia
                    style={{ height: 140 }}
                    image={video.snippet.thumbnails.medium.url}
                    title="thumbnail"
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="h2">
                        {video.snippet.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default VideoItem
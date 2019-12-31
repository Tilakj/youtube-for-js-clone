import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { VideoDetail, VideoList, HeaderBar } from './components';
import youtube from './api/youtube';

export class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: ''
        }
    }

    componentDidMount = () => {
        this.handleFormSubmit('')
    }
    onVideoSelected = (video) => {
        this.setState({ selectedVideo: video })

    }
    handleFormSubmit = searchTerm => {
        youtube.get('search',
            {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    safeSearch: 'strict',
                    key: 'AIzaSyC4T3Wxp4N_IZcCICttk9K_--iGkc28ZNA',
                    q: searchTerm + ' javascript'
                }
            }).then(respone => {
                this.setState({ videos: respone.data.items, selectedVideo: respone.data.items[0] })
                console.log(respone.data.items)
            })
            .catch(err => {
                alert(err)
            })

    }
    render() {
        const { selectedVideo, videos } = this.state
        return (
            <>
                <HeaderBar handleFormSubmit={this.handleFormSubmit} />
                <Grid style={{ marginTop: '65px' }} container spacing={2}>
                    <Grid item xs={12} md={8} >
                        <VideoDetail selectedVideo={selectedVideo} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <VideoList videos={videos} onVideoSelected={this.onVideoSelected} />
                    </Grid>
                </Grid>
            </>
        )
    }
}
export default App

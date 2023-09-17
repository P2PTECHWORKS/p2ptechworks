import React from 'react';
import './Index.css';

class Source extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hoNb6HuNmU0?si=r9Qi8w5dN0jsBNI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', // Initialize with no selected video
            similarVideos: [
                {
                    title: 'Similar Video 1',
                    description: 'Description for Similar Video 1',
                    videoId: '-t5b7MrWENk', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Similar Video 2',
                    description: 'Description for Similar Video 2',
                    videoId: 'nGeHstBtoH0', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Similar Video 3',
                    description: 'Description for Similar Video 3',
                    videoId: '_xuI60USDjw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Similar Video 3',
                    description: 'Description for Similar Video 3',
                    videoId: '_xuI60USDjw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Similar Video 3',
                    description: 'Description for Similar Video 3',
                    videoId: '_xuI60USDjw', // Replace with the actual YouTube video ID
                },
            ],
        };
    }

    handleVideoClick = (videoId) => {
        const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        this.setState({ selectedVideo: embedCode });
    };

    render() {
        const { selectedVideo, similarVideos } = this.state;

        return (
            <div className="app">
                <div className="video-container">
                    {/* Use selectedVideo to display the video */}
                    <div dangerouslySetInnerHTML={{ __html: selectedVideo }} />
                </div>
                <div className="playlist">
                    <h2>Playlist</h2>
                    <ul>
                        {similarVideos.map((video, index) => (
                            <li key={index} onClick={() => this.handleVideoClick(video.videoId)}>
                                <div className='playlist-item'>
                                    <img
                                        src={`https://img.youtube.com/vi/${video.videoId}/default.jpg`} // Generate the thumbnail URL
                                        alt={`Thumbnail for ${video.title}`}
                                        width="120"
                                        height="90"
                                    />
                                    <div className="playlist-text">
                                        <div className="title">{video.title}</div>
                                        <div className="description">{video.description}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Source;


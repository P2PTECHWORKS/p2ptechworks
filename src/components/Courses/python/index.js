import React from 'react';
import './Index.css';

class Source extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: '<iframe width="1002" height="400" src="https://www.youtube.com/embed/6yrsX752CWk" title="Variables &amp; Data Types In Python | Python Tutorial For Beginners | Python Programming | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', // Initialize with no selected video
            similarVideos: [
                {
                    title: 'Variables & Data Types In Python ',
                    description: 'Python Programming',
                    videoId: '6yrsX752CWk', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Operators In Python ',
                    description: 'Python Programming',
                    videoId: 'Pm9FOpOwhlA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Python Comments',
                    description: 'Python Programming',
                    videoId: 'yHFcNNh-SsA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Python Loops Tutorial',
                    description: 'Python Programming',
                    videoId: 'zFvoXxeoosI', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Python Functions Tutorial',
                    description: 'Python Programming',
                    videoId: 'oSPMmeaiQ68', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Fibonacci Series, Interview Programs, Pattern Programs',
                    description: 'Python Programming',
                    videoId: 'nX9kWPxzp9w', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Arrays In Python',
                    description: 'Python Programming',
                    videoId: 'phRshQSU-xA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Python Lists | Python Tuples | Python Sets & Dictionary | Python Strings ',
                    description: 'Python Programming',
                    videoId: 'fAw8pM_dQP4', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Sets In Python',
                    description: 'Python Programming',
                    videoId: 'MEPlLAjPvXY', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Dictionary In Python',
                    description: 'Python Programming',
                    videoId: 'rZjhId0VkuY', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Python OOPS Concepts',
                    description: 'Python Programming',
                    videoId: 'SRu1GAfr3LA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Python File Handling',
                    description: 'Python Programming',
                    videoId: 'ixEeeNjjOJ0', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Exception Handling In Python',
                    description: 'Python Programming',
                    videoId: 'NMTEjQ8-AJM', // Replace with the actual YouTube video ID
                },
                {
                    title: ' Python Regular Expressions Tutorial',
                    description: 'Python Programming',
                    videoId: 'zN8rwVXwRUE', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Advanced Python Tutorial | Learn Advanced Python Concepts',
                    description: 'Python Programming',
                    videoId: 'O1gZc-erLjg', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Python Interview Questions And Answers',
                    description: 'Python Programming',
                    videoId: 'B_17_RORoiI', // Replace with the actual YouTube video ID
                },
                {
                    title: 'How To Code In Python',
                    description: 'Python Programming',
                    videoId: 'WRNV7NVLNuA', // Replace with the actual YouTube video ID
                },
                
            ],
        };
    }

    handleVideoClick = (videoId) => {
        const embedCode = `<iframe width="1002" height="400" src="https://www.youtube.com/embed/6yrsX752CWk" title="Variables &amp; Data Types In Python | Python Tutorial For Beginners | Python Programming | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
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


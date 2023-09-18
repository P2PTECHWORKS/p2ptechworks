import React from 'react';
import './Index.css';


class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: '<iframe width="825" height="400" src="https://www.youtube.com/embed/KnvbUiSxvbM" title="#1: GettinC Programming" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', // Initialize with no selected video
            similarVideos: [
                {
                    title: 'Getting Started with C Programming',
                    description: 'C Programming',
                    videoId: 'KnvbUiSxvbM', // Replace with the actual YouTube video ID
                },
                {
                    title: 'C Variables',
                    description: 'C Programming',
                    videoId: 'h4VBpylsjJc', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Data Types in C Programming',
                    description: 'C Programming',
                    videoId: 'sARaqR0hRI4', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Take input in C',
                    description: 'Get User Input in C Programming',
                    videoId: '17gp5DJEyiw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Comments in C',
                    description: 'C Programming',
                    videoId: 'L2H2rtCLB-0', // Replace with the actual YouTube video ID
                },
                {
                    title: 'C Operators',
                    description: 'C Programming',
                    videoId: '_57FcSBtJNU', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Type Conversion in C',
                    description: 'C Programming',
                    videoId: 'xi2wf0Zy2Y4', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Boolean and Comparison Operators',
                    description: 'C Programming',
                    videoId: 'TybmJxXRV80', // Replace with the actual YouTube video ID
                },
                {
                    title: 'If Else Statements in C Programming',
                    description: 'C Programming',
                    videoId: 'K8mntKyBJGc', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Ternary Operator in C Programming',
                    description: 'C Programming',
                    videoId: '05xv2nMj6Ls', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Switch Statement in C Programming',
                    description: 'C Programming',
                    videoId: 'u6mb8NNwojA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'while Loop in C Programming',
                    description: 'C Programming',
                    videoId: 'WgS_SF1VrEk', // Replace with the actual YouTube video ID
                },
                {
                    title: 'for Loop in C Programming',
                    description: 'C Programming',
                    videoId: 'Xtl1oGtcX-8', // Replace with the actual YouTube video ID
                },
                {
                    title: 'break and continue in C | C Programming',
                    description: 'C Programming',
                    videoId: 'DpPf9XskST8', // Replace with the actual YouTube video ID
                },
                {
                    title: 'C Functions',
                    description: 'C Programming',
                    videoId: 'Npo1u37lcg8', // Replace with the actual YouTube video ID
                },
                {
                    title: 'C Variable Scope',
                    description: 'C Programming',
                    videoId: 'ej-GOnj7mj0', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Standard Library Functions in C',
                    description: 'C Programming',
                    videoId: 'OJvwk3pLK34', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Recursion in C',
                    description: 'C Programming',
                    videoId: '61T0cZ8KyGM', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Arrays in C',
                    description: 'C Programming',
                    videoId: 'MOeGnamlUP4', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Multidimensional Arrays in C',
                    description: 'C Programming',
                    videoId: 'ATA6dYDz954', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Strings in C',
                    description: 'C Programming',
                    videoId: 'l7zI3nswO1g', // Replace with the actual YouTube video ID
                },
                {
                    title: 'String Functions in C',
                    description: 'C Programming',
                    videoId: 'XdnmsKUvGsc', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Pointers in C',
                    description: 'C Programming',
                    videoId: 'KGhacRRMnDw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Pointers and Arrays in C',
                    description: 'C Programming',
                    videoId: 'LscgaBzlGdE', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Pointers and Functions in C',
                    description: 'C Programming',
                    videoId: 'JYHpD9huNR4', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Struct in C',
                    description: 'C Programming',
                    videoId: 'gt9YPl6O9ZM', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Enumerations(enums) in C',
                    description: 'C Programming',
                    videoId: '-N212LgGqik', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Dynamic Memory Allocation in C',
                    description: 'C Programming',
                    videoId: 'Dn87Bna23TQ', // Replace with the actual YouTube video ID
                },
                {
                    title: 'File Handling in C',
                    description: 'C Programming',
                    videoId: 'MQIF-WMUOL8', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Preprocesor and Macros in C',
                    description: 'C Programming',
                    videoId: 'cmGq62c1Ceg', // Replace with the actual YouTube video ID
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

export default Course;


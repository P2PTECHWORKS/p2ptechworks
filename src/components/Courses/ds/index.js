import React from 'react';
import './Index.css';

class Source extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: '<iframe width="1002" height="400" src="https://www.youtube.com/embed/Db9ZYbJONHc" title="Introduction to Data Structures through C | Data Structures Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', // Initialize with no selected video
            similarVideos: [
                {
                    title: 'Introduction to Data Structures through C | DSA ',
                    description: 'Data Structures and Algorithms',
                    videoId: 'Db9ZYbJONHc', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Stack in Data Structure | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'BrVZZZkkGGI', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Creation of Stack in DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'Y1vSGA0jm5E', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Program to Implement all the Stack Operations using Static Array | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'UYBYifvCey0', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Stack Implementation using JAVA | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'ugTUvNhHd9c', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Linked List using C | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'eGnlKPCkAFY', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Single Linked List Operations | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'o1QaGUEi6ew', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Single Linked List Length | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'ZhC1soR0zno', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Program for Implementation of Single Linked List (Part-1) | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'roei8Vd5814', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Program for Implementation of Single Linked List Part-2 | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'N_7lm7BBTpY', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Deleting a node in Linked list | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'qIjIwHiwkBg', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Insertion of Node in Single Linked List | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'e7xUBwxOzpk', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Queue | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'gnYM_G1ILm0', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Stack Using Single Linked List (Part 1) | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'OkkMub7pPBI', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Stack Using Single Linked List (Part 2) | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'aSnOCwWl56o', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Node swap in Single Linked List | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'FuiT4Ghjyn0', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'How to Perform Operations on Queue | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'EXsR7HXlGLw', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Single Linked List Implementation | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'aPDSSycB0OQ', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Double Linked List in Data Structures and Algorithms (Part-1)| DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'aTVSEEQXs-Y', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Double Linked List in Data Structures and Algorithms (Part-2)| DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'mCTSzm1YcfM', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Double Linked List in Data Structures and Algorithms (Part-3) | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: '7CbmGKk6gsE', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Bubble Sort Algorithm using C | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: '8Ug-a3IhUaE', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Reverse Singly Linked List using C | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'dR7v1sVX428', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Circular Queue using C | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'Ig34WPrgofI', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Operations on Circular Queue | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: '9nEcSGdX5vY', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Binary Search Tree using C | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'jBDc4Uuif28', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Insertion of Element into BST - Binary Search Tree | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'bCtmP8pSBF4', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Deletion Operation on Binary Search Tree using C (Part-1) | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'fEb__4Te_gk', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Deletion Operation on Binary Search Tree (Part-2) | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'dOFN0dMyE_s', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Deletion of a Node in BST - Node having 2 Children using C | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'lsGRy7DUcNU', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Display Elements in BST using C | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'c4eOz3fndiM', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'In-order Traversal in BST | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'dDjQphXcISc', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'AVL Tree L L Rotation | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: '8liDGiih4KM', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'L L Rotation | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: '82Qz3aNyZ4w', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Infix to Postfix Conversions | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'sw05hkrlJmE', // Replace with the actual YouTube video ID
        
                },
                {
                    title: 'Infix to Prefix Conversions | DSA',
                    description: 'Data Structures and Algorithms',
                    videoId: 'p4pPawXDh0U', // Replace with the actual YouTube video ID
        
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


import React from 'react';
import './Index.css';

class Source extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: '<iframe width="1002" height="400" src="https://www.youtube.com/embed/wjfeGxqAQOY" title="DBMS tutorial for beginners | Lec-1| Bhanu Priya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', // Initialize with no selected video
            similarVideos: [
                {
                    title: 'DBMS tutorial ',
                    description: 'Database Management System',
                    videoId: 'wjfeGxqAQOY', // Replace with the actual YouTube video ID
                },
                {
                    title: 'What is database ',
                    description: 'Database Management System',
                    videoId: 'oEJMJuFD204', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Components of data base systems ',
                    description: 'Database Management System',
                    videoId: 'tOohitf2CNE', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Building Blocks, Applications, Advantage, Disadvantage',
                    description: 'Database Management System',
                    videoId: '1Thk90gJF6U', // Replace with the actual YouTube video ID
                },
                {
                    title: 'DBMS Architecture ',
                    description: 'Database Management System',
                    videoId: 'CZfmqC9dMJA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'DBMS STRUCTURE ',
                    description: 'Database Management System',
                    videoId: 'W5c8fq80PuU', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Users and Administrators  ',
                    description: 'Database Management System',
                    videoId: 'c9zR90MU51s', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Data Independence ',
                    description: 'Database Management System',
                    videoId: 'zGBIAOYX9Uk', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Attributes ',
                    description: 'Database Management System',
                    videoId: 'nW5l5J19GKw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Types of Attribute ',
                    description: 'Database Management System',
                    videoId: 'coHxp23wTyc', // Replace with the actual YouTube video ID
                },
                {
                    title: 'ER Model Components ',
                    description: 'Database Management System',
                    videoId: 'kMJR5gexfs8', // Replace with the actual YouTube video ID
                },
                {
                    title: 'ER Model to Relational Model ',
                    description: 'Database Management System',
                    videoId: 'W9Oo4CjHlXg', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Mapping Relationship ',
                    description: 'Database Management System',
                    videoId: '0DV8EoKZq1Q', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Mapping Weak Entity and Hierarachy ',
                    description: 'Database Management System',
                    videoId: 'B-HDLP45VqA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Relational Model ',
                    description: 'Database Management System',
                    videoId: 'P8n_rwPzdBc', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Constraints ',
                    description: 'Database Management System',
                    videoId: 'qOlhsLIc0lA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Introduction of Keys   ',
                    description: 'Database Management System',
                    videoId: 'zZPUTJjKpzs', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Super Key ',
                    description: 'Database Management System',
                    videoId: 'MjA_Jx1z6ME', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Candidate Key ',
                    description: 'Database Management System',
                    videoId: 'GLH22JoqeMw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Primary Key ',
                    description: 'Database Management System',
                    videoId: 'p8iRFHfkI_Q', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Foreign Key ',
                    description: 'Database Management System',
                    videoId: 'fXoJFB5E2-k', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Secondary Key',
                    description: 'Database Management System',
                    videoId: 'PQ7Cc8bKw5k', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Composite key',
                    description: 'Database Management System',
                    videoId: 'Tqn4guzBYzA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Introduction of Relational Algebra',
                    description: 'Database Management System',
                    videoId: '5bmFEANOivg', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Relational Algebra Operations',
                    description: 'Database Management System',
                    videoId: 'KaIRmVD-v3U', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Select Operation',
                    description: 'Database Management System',
                    videoId: 'PnzdA0Tz-yo', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Projection Operation',
                    description: 'Database Management System',
                    videoId: 'FOWQRPexb00', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Set Difference Operation',
                    description: 'Database Management System',
                    videoId: 't2_IrL5U--o', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Union Operation',
                    description: 'Database Management System',
                    videoId: 'YdoQdPt_9NI', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Cartesian Product Operation',
                    description: 'Database Management System',
                    videoId: 'ams5CCN_xqw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Introduction of SQL ',
                    description: 'Database Management System',
                    videoId: 'k5WZ9MJTA_Y', // Replace with the actual YouTube video ID
                },
                {
                    title: 'SQL Joins (Part-1) ',
                    description: 'Database Management System',
                    videoId: 'epUjLxMLbJQ', // Replace with the actual YouTube video ID
                },
                {
                    title: 'SQL Joins (Part-2)',
                    description: 'Database Management System',
                    videoId: 'Gn9l4JIUloc', // Replace with the actual YouTube video ID
                },
                {
                    title: 'SQL Joins (Part-3)',
                    description: 'Database Management System',
                    videoId: 'KasQpgDpFbE', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Aggregate Functions',
                    description: 'Database Management System',
                    videoId: 'I95z0pSOUU0', // Replace with the actual YouTube video ID
                },
                {
                    title: 'DDL Commands (Part-1)',
                    description: 'Database Management System',
                    videoId: 'pAB-z0knPpk', // Replace with the actual YouTube video ID
                },
                {
                    title: 'DDL Commands (Part-2)',
                    description: 'Database Management System',
                    videoId: 'WbT2qv2bmjw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'DML Commands',
                    description: 'Database Management System',
                    videoId: 'WvOseanUdk4', // Replace with the actual YouTube video ID
                },
                {
                    title: 'DCL Commands',
                    description: 'Database Management System',
                    videoId: '12ly1opuGTw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'PL/SQL Concepts',
                    description: 'Database Management System',
                    videoId: 'bLrL9wbuQvs', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Examples of PL/SQL',
                    description: 'Database Management System',
                    videoId: 'DIwk_-8ORjE', // Replace with the actual YouTube video ID
                },{
                    title: 'Triggers (Part-1)',
                    description: 'Database Management System',
                    videoId: 'FttzCZICGpQ', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Triggers (Part-2)',
                    description: 'Database Management System',
                    videoId: 'oUV2sAltyPo', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Functional Dependency',
                    description: 'Database Management System',
                    videoId: 'X3c1phdyjbU', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Fully Functional Dependency ',
                    description: 'Database Management System',
                    videoId: 'fzfT2vp3kjM', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Decomposition',
                    description: 'Database Management System',
                    videoId: 'H8RI1MM4ucI', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Lossless Decomposition',
                    description: 'Database Management System',
                    videoId: 'hs_ubhFPNzo', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Introduction of Normalization (Part-1)',
                    description: 'Database Management System',
                    videoId: 'pkp0HKvl0mw', // Replace with the actual YouTube video ID
                },
                {
                    title: '1NF Normalization | Normalization (Part-2)',
                    description: 'Database Management System',
                    videoId: 'Vjz6OohFwUk', // Replace with the actual YouTube video ID
                },
                {
                    title: '2NF Normalization | Normalization (part-3)',
                    description: 'Database Management System',
                    videoId: 'rm0k3hINE64', // Replace with the actual YouTube video ID
                },
                {
                    title: '3nf Normalization | Normalization (part-4)',
                    description: 'Database Management System',
                    videoId: 'iz1XZaA3ZpY', // Replace with the actual YouTube video ID
                },
                {
                    title: 'BCNF Normalization | Normalization (part-5)',
                    description: 'Database Management System',
                    videoId: 'b39IhcO7qsA', // Replace with the actual YouTube video ID
                },
                {
                    title: '4nf Normalization | Normalization (part-6)',
                    description: 'Database Management System',
                    videoId: 'pr0UbOClLAQ', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Relational Calculus (Part-1)',
                    description: 'Database Management System',
                    videoId: '2HBwczTIKI8', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Relational Calculus (Part-2)',
                    description: 'Database Management System',
                    videoId: 'WGAae0B-3gg', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Relational Calculus (Part-3)',
                    description: 'Database Management System',
                    videoId: 'wtAuIBxd3Bw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Transaction Management',
                    description: 'Database Management System',
                    videoId: 'eYQwKi7P8MM', // Replace with the actual YouTube video ID
                },
                {
                    title: 'ACID Properties (Part-1)',
                    description: 'Database Management System',
                    videoId: '76Ct_opQS9c', // Replace with the actual YouTube video ID
                },
                {
                    title: 'ACID Properties (Part-2) ',
                    description: 'Database Management System',
                    videoId: '5L43xtVztDQ', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Transaction States',
                    description: 'Database Management System',
                    videoId: 'UkfWH3RHIJk', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Concurrency Control (Part-1)',
                    description: 'Database Management System',
                    videoId: '2Um-j_TTlZM', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Concurrency Control (Part-2)',
                    description: 'Database Management System',
                    videoId: 's1YEg1L0sH0', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Deadlock in Database',
                    description: 'Database Management System',
                    videoId: 'ee-wg9q29f0', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Two Phase Locking',
                    description: 'Database Management System',
                    videoId: 'IMseWc4S0ww', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Time Stamping Method ',
                    description: 'Database Management System',
                    videoId: 'aeykOjWjT5Q', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Time Stamp Ordering Protocol ',
                    description: 'Database Management System',
                    videoId: '-p5p85SdycE', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Database Recovery Management',
                    description: 'Database Management System',
                    videoId: 'HnVo3_iH76w', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Overview of physical storage ',
                    description: 'Database Management System',
                    videoId: 'blTkMaz3SYM', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Importance of File Organization (part-1)',
                    description: 'Database Management System',
                    videoId: 'S_P2yyQuB8M', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Importance of File Organization (part-2)',
                    description: 'Database Management System',
                    videoId: '80QqOL8vO1o', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Indexing with Example',
                    description: 'Database Management System',
                    videoId: 'uuRf-VEFbco', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Classification Indexing',
                    description: 'Database Management System',
                    videoId: 'mXPwAiGYl1w', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Primary Indexing',
                    description: 'Database Management System',
                    videoId: '29o99zuwwKs', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Secondary Indexing ',
                    description: 'Database Management System',
                    videoId: 'u5iHc46KOyo', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Cluster Indexing',
                    description: 'Database Management System',
                    videoId: 'Ph656dyoQVA', // Replace with the actual YouTube video ID
                },
                {
                    title: 'B+ Tree with Examples',
                    description: 'Database Management System',
                    videoId: 'jpS8BLb8BgI', // Replace with the actual YouTube video ID
                },
                {
                    title: 'B Tree in Database (Part-1)',
                    description: 'Database Management System',
                    videoId: 'c3CrNZaReNM', // Replace with the actual YouTube video ID
                },
                {
                    title: 'B Tree in database  (Part-2)',
                    description: 'Database Management System',
                    videoId: 'KnXohGgIpQU', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Need of Query Processing',
                    description: 'Database Management System',
                    videoId: 'lJvkIgFT3dY', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Query Cost Measures',
                    description: 'Database Management System',
                    videoId: 'rKN60UnVsMw', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Materialized View ',
                    description: 'Database Management System',
                    videoId: 'ZomzrCTxFeQ', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Sorting in DBMS (Part-1)',
                    description: 'Database Management System',
                    videoId: 'Vaosfh0vRfk', // Replace with the actual YouTube video ID
                },
                {
                    title: 'Sorting in DBMS (Part-2)',
                    description: 'Database Management System',
                    videoId: 'YTpkssYOUGw', // Replace with the actual YouTube video ID
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


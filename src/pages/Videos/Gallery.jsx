import React from 'react';
import { Player, ControlBar, BigPlayButton, VolumeMenuButton } from 'video-react';

const Gallery = () => {
    // Inline JSON data
    const videoData = {
        "videos": [
            {
                "title": "VFX Showreel",
                "src": "assets/videos/YMS SHOWREEL-compressed.mp4",
                "poster": "assets/videos/thumbnail/yms-showreel-poster.webp"
            },
            {
                "title": "Demo Renders",
                "src": "assets/videos/demo-renders.mp4",
                "poster": "assets/videos/thumbnail/demo-renders.webp"
            },
            {
                "title": "Advertising Showreel",
                "src": "assets/videos/Video Correction_AME-compressed.mp4",
                "poster": "assets/videos/thumbnail/AME.webp"
                
            },
            {
                "title": "Installation Reel",
                "src": "assets/videos/INSTALLATION REEL.mp4",
                "poster": "assets/videos/thumbnail/INSTALLATION REEL.webp"
            }
        ]
    };


    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {videoData.videos.map((video, index) => (
                        <div className="col-md-6" key={index}>
                            <Player
                                poster={video.poster}
                                src={video.src}
                            >
                                <ControlBar className="my-class" autoHide={false} disableDefaultControls={false}>
                                    <BigPlayButton position="center" />
                                    <VolumeMenuButton vertical />
                                </ControlBar>
                            </Player>
                            <div className='aboutcontenthero text-center py-3'>
                                {video.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;

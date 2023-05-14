import React from 'react'

function DisplayTrack({ currentTrack, audioRef, setDuration, progressBarRef, handleNext, }) {

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
        <div className='container'>
            <div class="row">
                <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} onEnded={handleNext} />
                <div className="audio-info">
                    <div class="col-lg-6">
                        <div className="audio-image">
                            {currentTrack.thumbnail ? (
                                <img src={currentTrack.thumbnail} alt="audio avatar" />
                            ) : (
                                <div className="icon-wrapper">
                                    <img src="src\data\no-avatar-music.png" alt="no musiv avtar" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div className="text">
                            <p className="title">{currentTrack.title}</p>
                            {/* <p>{currentTrack.author}</p> */}
                            <p className="new my-4">Discover new music</p>
                            <p className="etc">Lorem ipsum dolor sit amet consectetur adipiscing elit, duis magna fusce purus nisl at, nostra suspendisse lobortis placerat rhoncus odio.</p>
                            <div className='buttons my-4'>
                                <a href="#" className='btn p-2 mx-3 hvr-wobble-skew'>Download</a>
                                <a href="#" className='fw-bold mx-3 hvr-underline-from-left'>Read More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DisplayTrack
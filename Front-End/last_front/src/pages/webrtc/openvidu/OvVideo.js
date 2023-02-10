import React, {useEffect, useRef} from 'react';

const OvVideo = ({streamManager}) => {
    const videoRef = useRef()

    useEffect(()=>{
        if (streamManager && !!videoRef) {
            streamManager.addVideoElement(videoRef.current);
        }
    },[])

    useEffect(()=>{
        if (streamManager && !!videoRef) {
            streamManager.addVideoElement(videoRef.current);
        }
    }, [streamManager])

    return <video autoPlay={true} ref={videoRef} />;
}

export default OvVideo
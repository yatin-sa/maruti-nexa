import Webcam from 'react-webcam';
import { useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import { useEffect,useState } from 'react';
import { useSearchParams } from "react-router-dom";

const width = 300;
const height = 300;

const Test = () => {
  const [searchParams] = useSearchParams();
  const lo_id = searchParams.get('lo_id');
  const access_token = searchParams.get('access_token');
  const module_id = searchParams.get('module_id');
  const [errorMsg, setErrorMsg] = useState('');
  const [isError, setIsError] = useState(false);
  const [warning, setWarning] = useState(0);
  const [isDocumentVisible, setIsDocumentVisible] = useState(!document.hidden);

  let playerUrl = "";
  if (module_id === "")
    playerUrl = `${process.env.REACT_APP_ALM_URL}/app/player?lo_id=${lo_id}&access_token=${access_token}`;
  else
    playerUrl = `${process.env.REACT_APP_ALM_URL}/app/player?lo_id=${lo_id}&access_token=${access_token}&module_id=${module_id}`;
  // const { id } = useSearchParams();
  
  const { webcamRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
    faceDetectionOptions: {
      model: 'short',
    },
    faceDetection: new FaceDetection.FaceDetection({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    }),
    camera: ({ mediaSrc, onFrame }) =>
      new Camera(mediaSrc, {
        onFrame,
        width,
        height,
      }),
  });


  useEffect(async () => {
    
     if(facesDetected>=2){
      setIsError(true)
      setErrorMsg('No help by others')
      setWarning(warning+1)
     }else if(facesDetected<1){
      setIsError(true)
      setErrorMsg('Please be seated in front of the camera.')
      setWarning(warning+1)
     }else{
      setIsError(false)
      setErrorMsg('')
     }
     

    console.log("includes face ", facesDetected,);
  }, [facesDetected]);


  const handleVisibilityChange = () => {
    setIsDocumentVisible(!document.hidden);
  };


  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }, []);

 useEffect( () => {
  if (isDocumentVisible) {
    var newval = warning+1
    console.log('ttt ',newval,typeof warning)
    setWarning(newval)
  }
}, [isDocumentVisible]);


useEffect(() => {
  if(warning>=3){
    setTimeout(() => {
      window.close();
    }, 6000);
  }
}, [warning]);
  
console.log('warning ',warning)

  return (
    <div>
     {
      (isError) ? <div>
        <div className="alert alert-danger" role="alert">{errorMsg}</div>
      </div> : ''
     }
     {
      (warning>=3) ? <div className="face_error" >Session ended due to activity outside the window or multiple users detected.<br/>Please close this tab manually.</div> : ''
     }
     
        <div>
          {/* <p>{`Loading: ${isLoading}`}</p>
          <p>{`Face Detected: ${detected}`}</p>
          <p>{`Number of faces detected: ${facesDetected}`}</p> */}
          <div className='face_detection_box'>
            {boundingBox.map((box, index) => (
              <div
                key={`${index + 1}`}
                style={{
                  border: '4px solid red',
                  position: 'absolute',
                  top: `${box.yCenter * 100}%`,
                  left: `${box.xCenter * 100}%`,
                  width: `${box.width * 100}%`,
                  height: `${box.height * 100}%`,
                  zIndex: 1,
                }}
              />
            ))}
            <Webcam
              ref={webcamRef}
              forceScreenshotSourceSize
              style={{
                height,
                width,
                position: 'absolute',
              }}
            />
          </div>
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <iframe src={playerUrl} className="ms_course_frame" height="90%" width="100%"></iframe>
        </div>
    </div>
  );
};

export default Test;


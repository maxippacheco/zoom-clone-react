import { useState } from "react";

export const useCameraSettings = () => {
  
	const [audio, setAudio] = useState(false);
	const [camera, setCamera] = useState(false);

	const switchCamera = () => {
		setCamera(!camera);
	}

	const switchAudio = () => {
		setAudio(!audio);
	};

	return{
		audio,
		switchAudio,
		camera,
		switchCamera,		
  	};
};

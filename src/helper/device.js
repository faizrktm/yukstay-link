import { useEffect, useState } from 'react';

function detectDevice(){
  if (typeof window === 'undefined') return null;
  const { isAndroid, isIOS, osName } = require('react-device-detect');

  if(isAndroid){
    return 'ANDROID';
  } if(isIOS || osName === 'Mac OS'){
    return 'APPLE';
  }
  return 'ANDROID';
}

export default function useDetectDevice() {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    setDevice(detectDevice());
  }, []);

  return device;
}

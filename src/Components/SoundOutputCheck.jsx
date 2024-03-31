import React, { useState, useEffect } from 'react';

const SoundOutputCheck = () => {
  const [outputSource, setOutputSource] = useState('');

  useEffect(() => {
    const audioOutputChanged = (event) => {
      const newOutputSource = event.currentTarget.sinkId;
      setOutputSource(newOutputSource);
    };

    if (navigator.mediaDevices && navigator.mediaDevices.addEventListener) {
      navigator.mediaDevices.addEventListener('devicechange', audioOutputChanged);
    }

    return () => {
      if (navigator.mediaDevices && navigator.mediaDevices.removeEventListener) {
        navigator.mediaDevices.removeEventListener('devicechange', audioOutputChanged);
      }
    };
  }, []);

  return (
    <div>
      {outputSource === 'default' && <p>Sound output source: Device speaker</p>}
      {outputSource === 'communications' && <p>Sound output source: Bluetooth</p>}
      {(outputSource !== 'default' && outputSource !== 'communications') && <p>Sound output source: Unknown</p>}
    </div>
  );
};

export default SoundOutputCheck;

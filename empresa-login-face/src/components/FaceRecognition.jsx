import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

const FaceRecognition = ({ onLogin }) => {
  const videoRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [detecting, setDetecting] = useState(false);

  // Cargar modelos una sola vez
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        ]);
        setModelsLoaded(true);
        console.log('Modelos cargados correctamente');
      } catch (error) {
        console.error('Error cargando modelos:', error);
      }
    };
    loadModels();
  }, []);

  // Iniciar la cámara y detección
  useEffect(() => {
    let interval;
    if (modelsLoaded && cameraActive) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play();
              console.log('Cámara activada');
            };
          }

          interval = setInterval(async () => {
            const detections = await faceapi.detectAllFaces(
              videoRef.current,
              new faceapi.TinyFaceDetectorOptions()
            );
            if (detections.length > 0 && !detecting) {
              setDetecting(true);
              alert('Cara detectada. Inicio de sesión exitoso.');
              onLogin('usuario_facial');
              setCameraActive(false);
            }
          }, 1000);
        })
        .catch((err) => {
          console.error('Error al acceder a la cámara:', err);
          alert('No se pudo acceder a la cámara');
        });
    }

    return () => {
      clearInterval(interval);
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [modelsLoaded, cameraActive]);

  return (
    <div>
      <h3>Reconocimiento Facial</h3>
      {cameraActive ? (
        <div>
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            autoPlay
            muted
            style={{ borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <button onClick={() => setCameraActive(false)} style={{ marginTop: '1rem' }}>
            Cerrar cámara
          </button>
        </div>
      ) : (
        <button onClick={() => setCameraActive(true)}>Iniciar reconocimiento facial</button>
      )}
    </div>
  );
};

export default FaceRecognition;

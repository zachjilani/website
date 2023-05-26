import { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import CanvasLoader from '../Loader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Moon = ({ isMobile }) => {
  const moon = useGLTF('./moon/scene.gltf')

  let mixer
  if(moon.animations.length){
    mixer = new THREE.AnimationMixer(moon.scene);
    moon.animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }
  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  return (
    <mesh>
      <hemisphereLight intensity={0.15}/>
      <pointLight intensity={1} />
      <primitive object={moon.scene}
      scale={isMobile ? 4 : 5}
      position={isMobile? [0, -1, 0] : [0, 1.2, 0]}
      rotation={[0, 0, -.2]} />
    </mesh>
  )
}

const MoonCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov: 25}}
    gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.0}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}/>
        <Moon isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default MoonCanvas
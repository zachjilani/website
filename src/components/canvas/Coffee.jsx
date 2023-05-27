import { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame, events } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import CanvasLoader from '../Loader';

const Coffee = ({ isMobile }) => {
  const coffee = useGLTF('./coffeebot/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.59} groundColor='black' />
      <pointLight intensity={1} />
      <primitive object ={coffee.scene}
      scale={isMobile ? .0035 : .005}
      position = {isMobile ? [1, -1.8, 0] : [0, -2.4, 0]}
      rotation={[0, 0.7, 0]} />
    </mesh>
  )
}

const CoffeeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 650px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  })

  return (
    <Canvas frameloop='demand' camera={{position: [20, 3, 5], fov: 25}}
    gl={{ preserveDrawingBuffer: true }} >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        enablePan={false}
        minAzimuthAngle={Math.PI/2}
        minPolarAngle={Math.PI/4}/>
        <Coffee isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}

export default CoffeeCanvas
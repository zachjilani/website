import { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import CanvasLoader from '../Loader';


const Robot = ({ isMobile }) => {
  const robot = useGLTF('./robot/scene.gltf')

  let mixer
  if(robot.animations.length){
    mixer = new THREE.AnimationMixer(robot.scene);
    robot.animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }
  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={robot.scene}
      scale={isMobile ? 1 : 2}
      position={isMobile? [0, -1.5, 0] : [0, -2, 0]}
      rotation={[0, 1.2, 0]} />
    </mesh>
  )
}

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 650px)');
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
    <Canvas frameloop='always' shadows camera={{position: [20, 3, 5], fov: 25}}
    gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        enablePan={false}
        minAzimuthAngle={Math.PI/4}
        minPolarAngle={Math.PI/4}/>
        <Robot isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default RobotCanvas
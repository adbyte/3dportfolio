import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ComputersModel = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
   
  return (
    <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={2} />
      <primitive 
        object = {computer.scene}
        scale = {0.75}
        position = {[0, -3.75, -1.25]} 
        rotation = {[ -0.01, -0.2, -0.1]}/>
    </>
  );
}

const Computers = () => {
  return(
    <Canvas 
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputersModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default Computers;

import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Physics, useSphere, Debug } from "@react-three/cannon"
import { Environment, Text, OrbitControls } from "@react-three/drei"
import { EffectComposer, SSAO } from '@react-three/postprocessing'
import { useRef } from "react"

import InstancedScooter from "./Scooter"

export default function App () {
  return (
  <Canvas gl={{alpha: false}} shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 35, near: 1, far: 40 }}>
    <color attach="background" args={["#f5fbff"]} />
    <ambientLight intensity={0.5} />
    <spotLight intensity={2} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
    <directionalLight intensity={4} position={[-10, -10, -10]} color="lightblue" />
    <Physics 
      gravity={[0, 2, 0]} 
      iterations={4}>
      {/* <Debug color="black" scale={1.1}> */}
        <Pointer />
        <ScooterClump />
      {/* </Debug> */}
    </Physics>
    <Environment files="/adamsbridge.hdr" />
    <Text 
      font='/Inter-Bold.woff'
      fontSize={0.75}
      color={"#ff5436"}
      position={[0, 0, -10]} >park responsibly.</Text>
    <Effects />
    {/* <OrbitControls /> */}
  </Canvas>
  )
}

function ScooterClump(props) {
  return (
    <>
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter /> 
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    <InstancedScooter />
    </>
  )
}

function Pointer() {
  const viewport = useThree((state) => state.viewport)
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))
  return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
}

function Effects() {
  return (
    <EffectComposer>
      <SSAO radius={5} />
    </EffectComposer>
  )
}
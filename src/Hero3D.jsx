
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  RoundedBox,
  Text,
  Sparkles,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

const codeLines = [
  { text: "const developer = {", color: "#9fb7ff", y: 0.62 },
  { text: '  name: "Aymen",', color: "#74e5cc", y: 0.38 },
  { text: '  role: "IT Student",', color: "#74e5cc", y: 0.14 },
  { text: '  passion: "Cybersecurity",', color: "#d5a4ff", y: -0.10 },
  { text: "};", color: "#9fb7ff", y: -0.58 },
];

function Keyboard() {
  const keys = [];

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 13; col++) {
      keys.push(
        <RoundedBox
          key={`${row}-${col}`}
          args={[0.22, 0.025, 0.17]}
          radius={0.018}
          smoothness={4}
          position={[
            -1.47 + col * 0.245,
            -0.755,
            0.46 + row * 0.255,
          ]}
        >
          <meshStandardMaterial
            color={
              (row + col) % 9 === 0
                ? "#5478cf"
                : "#17223d"
            }
            metalness={0.35}
            roughness={0.4}
          />
        </RoundedBox>
      );
    }
  }

  return <group>{keys}</group>;
}

function Laptop() {
  const laptop = useRef();

  useFrame((state, delta) => {
    if (!laptop.current) return;

    const targetY = -0.22 + state.pointer.x * 0.17;
    const targetX = 0.06 - state.pointer.y * 0.08;

    laptop.current.rotation.y = THREE.MathUtils.damp(
      laptop.current.rotation.y,
      targetY,
      2.5,
      delta
    );

    laptop.current.rotation.x = THREE.MathUtils.damp(
      laptop.current.rotation.x,
      targetX,
      2.5,
      delta
    );
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.06}
      floatIntensity={0.25}
    >
      <group ref={laptop} rotation={[0.06, -0.22, 0]}>
        {/* ÉCRAN - CADRE */}
        <RoundedBox
          args={[3.75, 2.45, 0.14]}
          radius={0.12}
          smoothness={5}
          position={[0, 0.48, 0]}
          castShadow
        >
          <meshStandardMaterial
            color="#283754"
            metalness={0.75}
            roughness={0.25}
          />
        </RoundedBox>

        {/* SURFACE DE L'ÉCRAN */}
        <mesh position={[0, 0.48, 0.078]}>
          <planeGeometry args={[3.5, 2.18]} />
          <meshBasicMaterial color="#071326" />
        </mesh>

        {/* BARRE SUPÉRIEURE */}
        <mesh position={[0, 1.34, 0.09]}>
          <planeGeometry args={[3.46, 0.37]} />
          <meshBasicMaterial color="#111f39" />
        </mesh>

        {/* BOUTONS TYPE ÉDITEUR */}
        {["#fb7185", "#fbbf24", "#34d399"].map(
          (color, index) => (
            <mesh
              key={color}
              position={[-1.49 + index * 0.18, 1.34, 0.11]}
            >
              <circleGeometry args={[0.055, 20]} />
              <meshBasicMaterial color={color} />
            </mesh>
          )
        )}

        <Text
          position={[0.05, 1.34, 0.11]}
          fontSize={0.13}
          color="#9db5df"
          anchorX="center"
          anchorY="middle"
        >
          developer.jsx
        </Text>

        {/* LIGNES DE CODE */}
        {codeLines.map((line, index) => (
          <Text
            key={index}
            position={[-1.42, line.y + 0.16, 0.11]}
            fontSize={0.145}
            color={line.color}
            anchorX="left"
            anchorY="middle"
          >
            {line.text}
          </Text>
        ))}

        {/* INDICATEUR EN BAS D'ÉCRAN */}
        <mesh position={[0, -0.46, 0.11]}>
          <planeGeometry args={[3.46, 0.05]} />
          <meshBasicMaterial color="#162c55" />
        </mesh>

        {/* WEBCAM */}
        <mesh position={[0, 1.657, 0.077]}>
          <circleGeometry args={[0.025, 16]} />
          <meshBasicMaterial color="#60a5fa" />
        </mesh>

        {/* CHARNIÈRE */}
        <mesh
          position={[0, -0.75, 0.14]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.055, 0.055, 3.45, 24]} />
          <meshStandardMaterial
            color="#566b91"
            metalness={0.85}
            roughness={0.2}
          />
        </mesh>

        {/* BASE DU PORTABLE */}
        <RoundedBox
          args={[3.85, 0.14, 2.3]}
          radius={0.1}
          smoothness={5}
          position={[0, -0.88, 1.14]}
          castShadow
        >
          <meshStandardMaterial
            color="#8292b2"
            metalness={0.8}
            roughness={0.28}
          />
        </RoundedBox>

        {/* SURFACE DU CLAVIER */}
        <RoundedBox
          args={[3.61, 0.03, 2.08]}
          radius={0.07}
          smoothness={4}
          position={[0, -0.797, 1.14]}
        >
          <meshStandardMaterial
            color="#34415c"
            metalness={0.6}
            roughness={0.35}
          />
        </RoundedBox>

        <Keyboard />

        {/* TRACKPAD */}
        <RoundedBox
          args={[1.15, 0.01, 0.43]}
          radius={0.035}
          smoothness={4}
          position={[0, -0.772, 1.97]}
        >
          <meshStandardMaterial
            color="#64748b"
            metalness={0.65}
            roughness={0.35}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div
      className="hero-3d"
      role="img"
      aria-label="Ordinateur portable 3D animé affichant du code"
    >
      <Canvas
        camera={{ position: [0, 0.3, 8], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true }}
        shadows
      >
        <ambientLight intensity={1.8} />

        <directionalLight
          position={[3, 5, 6]}
          intensity={3}
          color="#a7c7ff"
          castShadow
        />

        <pointLight
          position={[-3, 1, 3]}
          intensity={35}
          color="#6366f1"
        />

        <pointLight
          position={[3, -1, 2]}
          intensity={25}
          color="#a855f7"
        />

        <Sparkles
          count={38}
          scale={[6, 4.5, 3]}
          size={2}
          speed={0.35}
          color="#8bb9ff"
          opacity={0.7}
        />

        <Laptop />

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.28}
          scale={6}
          blur={2.5}
          far={3}
          color="#5871e0"
        />
      </Canvas>
    </div>
  );
}

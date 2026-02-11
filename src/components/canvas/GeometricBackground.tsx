'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Formas geométricas flutuantes sutis (Mantive iguais, mas agora ficarão mais nítidas)
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null!)
  
  const shapes = useMemo(() => {
    const items = []
    const geometries = [
      new THREE.TetrahedronGeometry(0.3),
      new THREE.OctahedronGeometry(0.25),
      new THREE.IcosahedronGeometry(0.2),
    ]
    
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[i % geometries.length]
      const x = (Math.random() - 0.5) * 12
      const y = (Math.random() - 0.5) * 8
      const z = (Math.random() - 0.5) * 5
      const scale = 0.5 + Math.random() * 0.5
      const rotationSpeed = 0.001 + Math.random() * 0.002
      
      items.push({
        geometry,
        position: [x, y, z] as [number, number, number],
        scale,
        rotationSpeed,
        offset: Math.random() * Math.PI * 2,
      })
    }
    
    return items
  }, [])
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((mesh, i) => {
        const shape = shapes[i]
        const time = state.clock.getElapsedTime()
        
        mesh.rotation.x = time * shape.rotationSpeed
        mesh.rotation.y = time * shape.rotationSpeed * 1.3
        mesh.position.y = shape.position[1] + Math.sin(time * 0.3 + shape.offset) * 0.5
      })
    }
  })
  
  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <mesh
          key={i}
          geometry={shape.geometry}
          position={shape.position}
          scale={shape.scale}
        >
          <meshStandardMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      ))}
    </group>
  )
}
function MinimalParticles() {
  const pointsRef = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const count = 100
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = (Math.random() - 0.5) * 15
      positions[i3 + 2] = (Math.random() - 0.5) * 10
    }
    
    return positions
  }, [])
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
    }
  })
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}        // AUMENTADO: de 0.03 para 0.06
        color="#ffffff"    // ALTERADO: de cinza (#a3a3a3) para branco puro
        transparent
        opacity={0.8}      // AUMENTADO: de 0.3 para 0.8
        sizeAttenuation
      />
    </points>
  )
}

export default function GeometricBackground() {
  return (
    // REMOVIDO: A classe 'opacity-40' foi retirada para total visibilidade
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <FloatingShapes />
        <MinimalParticles />
      </Canvas>
    </div>
  )
}
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 feb.gltf 
Author: Pebegou (https://sketchfab.com/Pebegou)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/soviet-super-hero-b494f1507ee04efaaedd7795c5ab7513
Title: Soviet Super Hero
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/feb.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Hero_Hero_0.geometry} material={materials.Hero} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Capa_Hero_0.geometry} material={materials.Hero} />
      <mesh geometry={nodes.Equip_Hero_0.geometry} material={materials.Hero} position={[0, 228.775, 38.77]} rotation={[0.174, 0, 0]} scale={1.038} />
    </group>
  )
}

useGLTF.preload('/feb.gltf')

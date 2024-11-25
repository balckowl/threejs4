import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, SpotLightHelper } from "three";

type Props = {
    position: [number, number, number]
}


function LightHelper() {

    const light = useRef(null!)

    useHelper(light, SpotLightHelper, "orange")

    return (
        <spotLight ref={light} position={[0, 2, 0]} intensity={10} distance={5} color="#ff00ff" />
    )
}

export const Showcase = ({ position }: Props) => {
    const gemRef = useRef<Mesh>(null!);

    useFrame(() => {
        gemRef.current.rotation.y += 0.01;
    });

    return (
        <group position={position}>
            {/* ベース */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="#555555" />
            </mesh>
            {/* 透明カバー */}
            <mesh position={[0, 2, 0]}>
                <boxGeometry args={[2, 3, 2]} />
                <meshStandardMaterial transparent opacity={0.2} color="#cccccc" />
            </mesh>
            {/* 宝石 */}
            <mesh position={[0, 2, 0]} ref={gemRef}>
                <dodecahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={2} />
            </mesh>
            {/* ライト */}
            <LightHelper />
        </group>
    );
};

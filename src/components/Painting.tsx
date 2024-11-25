import { useTexture } from "@react-three/drei"

type Props = {
    fPosition: [number, number, number],
    pPosition: [number, number, number],
    lPosition: [number, number, number]
    rotation: [number, number, number],
    fSize: [number, number, number],
    pSize: [number, number]
    color: string,
    pictureUrl: string
}

export default function Painting({ fPosition, pPosition, lPosition, rotation, fSize, pSize, color, pictureUrl }: Props) {

    const picture = useTexture({
        map: pictureUrl
    })

    return (
        <group>
            {/*絵画ライト*/}
            <group>
                <mesh
                    rotation={rotation}
                    position={[lPosition[0], lPosition[1], lPosition[2]]}
                >
                    <boxGeometry args={[2.8, 0.5, 0.5]} />
                    <meshStandardMaterial
                        color="orange"
                        emissive="orange"
                        emissiveIntensity={2}
                        transparent={true}
                        opacity={0.6}
                    />
                </mesh>
                {/* スポットライト */}
                <pointLight
                    position={[lPosition[0], lPosition[1] - 0.5, lPosition[2]]}
                    intensity={10}
                    distance={40}
                />
            </group>

            {/* 額縁 */}
            <mesh
                position={fPosition}
                rotation={rotation}
            >
                <boxGeometry args={fSize} />
                <meshStandardMaterial color={color} />
            </mesh>

            {/* 壁に絵画を追加 */}
            <mesh
                position={pPosition}
                rotation={rotation}
            >
                <planeGeometry args={pSize} /> {/* 絵画のサイズ */}
                <meshStandardMaterial map={picture.map} /> {/* 絵画のテクスチャを適用 */}
            </mesh>
        </group>
    )
}

export const Fence = () => {
    const posts = [
        [-3, 0.5, -3],
        [3, 0.5, -3],
        [-3, 0.5, 3],
        [3, 0.5, 3],
    ];
    const bars = [
        [0, 1, -3, [6, 0.1, 0.1], [0, 0, 0]],
        [0, 1, 3, [6, 0.1, 0.1], [0, 0, 0]],
        [-3, 1, 0, [6, 0.1, 0.1], [0, Math.PI / 2, 0]],
        [3, 1, 0, [6, 0.1, 0.1], [0, Math.PI / 2, 0]],
    ];

    return (
        <group>
            {/* 柱 */}
            {posts.map((pos, i) => (
                <mesh key={i} position={pos as [number, number, number]}>
                    <cylinderGeometry args={[0.1, 0.1, 1]} />
                    <meshStandardMaterial color="#000000" />
                </mesh>
            ))}
            {/* バー */}
            {bars.map(([x, y, z, size, rotation], i) => (
                <mesh key={i} position={[x, y, z] as [number, number, number]} rotation={rotation as [number, number, number]}>
                    <boxGeometry args={size as [number, number, number]} />
                    <meshStandardMaterial color="#000000" />
                </mesh>
            ))}
        </group>
    );
};

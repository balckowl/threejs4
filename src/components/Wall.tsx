type Props = {
    position: [number, number, number],
    size: [number, number],
    color: string,
    rotation: [number, number, number]
}

export const Wall = ({ position, rotation, color, size }: Props) => {
    return (
        <mesh position={position} rotation={rotation}>
            <planeGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

import { useTexture } from "@react-three/drei";
import { Wall } from "./Wall";
import { Showcase } from "./ShowCase";
import { Fence } from "./Fence";
import Painting from "./Painting";


// function LightHelper() {

//     const roomWidth = 15; // 部屋の幅
//     const roomHeight = 10; // 部屋の高さ

//     const light = useRef(null!)

//     useHelper(light, PointLightHelper, 1, "orange")

//     return (
//         <pointLight
//             ref={light}
//             position={[roomWidth / 2 - 0.5 / 2, roomHeight / 2 + 1, 0]}
//             intensity={50}
//         />
//     )
// }


export const Room = () => {
    const wallColor = "#ff0000"; // 壁の色
    const roomWidth = 15; // 部屋の幅
    const roomHeight = 10; // 部屋の高さ
    const roomDepth = 15; // 部屋の奥行き

    // 額縁のパラメータ
    const frameWidth = 5.2; // 絵画の幅 + 額縁の余白
    const frameHeight = 3.2; // 絵画の高さ + 額縁の余白
    const frameDepth = 0.1; // 額縁の厚さ
    const frameColor = "#8B4513"; // 額縁の色（木材っぽい色）


    const marble = useTexture({
        map: "/images.jpeg"
    })

    return (
        <group>
            {/* 床 */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <planeGeometry args={[roomWidth, roomDepth]} />
                <meshStandardMaterial map={marble.map} />
            </mesh>
            {/* 壁1（前面） */}
            <Wall
                position={[0, roomHeight / 2, -roomDepth / 2]}
                size={[roomWidth, roomHeight]}
                color={wallColor}
                rotation={[0, 0, 0]}
            />
            {/* 壁2（背面） */}
            <Wall
                position={[0, roomHeight / 2, roomDepth / 2]}
                size={[roomWidth, roomHeight]}
                color={wallColor}
                rotation={[0, Math.PI, 0]}
            />
            {/* 壁3（左側） */}
            <Wall
                position={[-roomWidth / 2, roomHeight / 2, 0]}
                size={[roomWidth, roomHeight]}
                color={wallColor}
                rotation={[0, Math.PI / 2, 0]}
            />
            {/* 壁4（右側） */}
            <Wall
                position={[roomWidth / 2, roomHeight / 2, 0]}
                size={[roomWidth, roomHeight]}
                color={wallColor}
                rotation={[0, -Math.PI / 2, 0]}
            />

            <Painting
                lPosition={[0, roomHeight / 2 + 2, -roomDepth / 2 + 0.5 / 2]}
                fPosition={[0, roomHeight / 2, -roomDepth / 2 + 0.005 - frameDepth / 2]}
                pPosition={[0, roomHeight / 2, -roomDepth / 2 + 0.01]}
                fSize={[frameWidth, frameHeight, frameDepth]}
                pSize={[5, 3]}
                rotation={[0, 0, 0]}
                pictureUrl="/authjs.png"
                color={frameColor}
            />

            <Painting
                lPosition={[-roomWidth / 2 + 0.5 / 2, roomHeight / 2 + 2, 0]}
                fPosition={[-roomDepth / 2 + 0.005 - frameDepth / 2, roomHeight / 2, 0]}
                pPosition={[-roomWidth / 2 + 0.01, roomHeight / 2, 0]}
                fSize={[frameWidth, frameHeight, frameDepth]}
                pSize={[5, 3]}
                rotation={[0, Math.PI / 2, 0]}
                pictureUrl="/supabase.png"
                color={frameColor}
            />

            {/* <Painting
                lPosition={[0, roomHeight / 2 + 2, roomWidth / 2 - 0.5 / 2]}
                fPosition={[0, roomHeight / 2, roomDepth / 2 + 0.005 - frameDepth / 2]}
                pPosition={[0, roomHeight / 2, roomDepth / 2 - 0.1]}
                fSize={[frameWidth, frameHeight, frameDepth]}
                pSize={[5, 3]}
                rotation={[0, Math.PI, 0]}
                pictureUrl="/nextjs.png"
                color={frameColor}
            /> */}

            <Painting
                lPosition={[roomWidth / 2 - 0.5 / 2, roomHeight / 2 + 2, 0]}
                fPosition={[roomWidth / 2 + 0.005 - frameDepth / 2, roomHeight / 2, 0]}
                pPosition={[roomWidth / 2 - 0.1, roomHeight / 2, 0]}
                fSize={[frameWidth, frameHeight, frameDepth]}
                pSize={[5, 3]}
                rotation={[0, - Math.PI / 2, 0]}
                pictureUrl="/prisma.png" // 右側壁の画像
                color={frameColor}
            />

            {/* ショーケース */}
            <Showcase position={[0, 1, 0]} />

            {/* 柵 */}
            <Fence />
        </group>
    );
};

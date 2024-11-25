import { Canvas, useFrame } from "@react-three/fiber";
import { Room } from "./components/Room";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

type RotatingCameraProps = {
  center?: [number, number, number]; // タプル型を使用
  radius?: number;
  speed?: number;
};

function RotatingCamera({ center = [0, 3, 0], radius = 10, speed = 0.01 }: RotatingCameraProps) {
  const angleRef = useRef(0); // 現在の角度を管理する

  useFrame(({ camera }) => {
    angleRef.current += speed; // 角度を更新
    const angle = angleRef.current;

    // カメラの位置を計算
    camera.position.x = center[0] + radius * Math.cos(angle);
    camera.position.z = center[2] + radius * Math.sin(angle);
    camera.position.y = center[1]; // 必要なら高さを調整

    // カメラが中心を向くように設定
    camera.lookAt(...center);
  });

  return null;
}

export default function App() {

  return (
    <div style={{
      width: "100%",
      height: "100vh",
    }}>
      <Canvas camera={{ position: [10, 3, 10] }}>
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight position={[5, 5, 5]} /> */}
        <gridHelper args={[100, 100]} />
        {/* <RotatingCamera /> */}
        <OrbitControls />
        {/* <spotLight
          position={[0, 20, 0]} // 絵画を上から斜めに照らす位置
          angle={Math.PI / 1} // ライトの拡散角度
          penumbra={0.3} // ライトのぼかし具合
          intensity={1000} // 明るさ
          distance={20} // ライトの到達範囲
        /> */}

        <Room />
      </Canvas>
    </div>
  )
}

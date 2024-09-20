import * as THREE from "three";
import { frames } from "../constants";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const Frames = () => {
  const { camera } = useThree();
  camera.lookAt(0, 0, 1.5);

  return (
    <>
      {frames.map((frame, index) => (
        <Frame key={index} position={[0, 0, index - 5]} {...frame} />
      ))}
    </>
  );
};

export default Frames;

const Frame = (props) => {
  const [isDragging, setIsDragging] = useState(false);
  const { url, width = 1, height = 1 } = props; // Allow passing width and height via props
  const frameRef = useRef();
  const reflectionRef = useRef();
  const videoRef = useRef(document.createElement("video"));
  const scrollOffset = useRef(0);
  const speed = 0.02;

  const total = frames.length;
  const max = total / 2;

  const animationRef = useRef();

  useEffect(() => {
    // Load the video into the video element
    const videoElement = videoRef.current;
    videoElement.src = url;
    videoElement.crossOrigin = "Anonymous";
    videoElement.loop = true;
    videoElement.muted = true;

    // Only play the video after it can play
    const handleCanPlay = () => {
      videoElement.play();
    };
    
    videoElement.addEventListener("canplay", handleCanPlay);

    const scale = isDragging ? 1 : 1.1;
    if (animationRef.current) {
      animationRef.current.kill();
    }
    animationRef.current = gsap.to(frameRef.current.scale, {
      x: scale,
      y: scale,
      z: scale,
      duration: 0.5,
    });

    return () => {
      videoElement.removeEventListener("canplay", handleCanPlay);
      animationRef.current.kill();
    };
  }, [url, isDragging]);

  useFrame((state, delta) => {
    frameRef.current.position.z = lerp(
      frameRef.current.position.z,
      frameRef.current.position.z + scrollOffset.current,
      0.1
    );

    scrollOffset.current = lerp(scrollOffset.current, 0, 0.1);

    const offset = frameRef.current.position.z % max;
    if (frameRef.current.position.z > max) {
      frameRef.current.position.z = -max + offset;
    } else if (frameRef.current.position.z < -max) {
      frameRef.current.position.z = max + offset;
    }
  });

  return (
    <group>
      {/* Original Video Mesh */}
      <mesh ref={frameRef} {...props}>
        <planeGeometry args={[width, height]} /> {/* Set custom width and height */}
        <meshBasicMaterial side={THREE.DoubleSide} map={new THREE.VideoTexture(videoRef.current)} />
      </mesh>

      {/* Reflection Mesh */}
      <mesh
        ref={reflectionRef}
        position={[0, -height - 0.05, 0]} // Position reflection below original
        scale={[1, -1, 1]} // Flip reflection vertically
      >
        <planeGeometry args={[width, height]} /> {/* Use the same width and height for reflection */}
        <meshBasicMaterial
          side={THREE.DoubleSide}
          map={new THREE.VideoTexture(videoRef.current)}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Fade-out effect for reflection */}
      <mesh position={[0, -height - 0.05, 0]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          side={THREE.DoubleSide}
          transparent
          opacity={0.5}
          color={new THREE.Color("black")}
        />
      </mesh>
    </group>
  );
};

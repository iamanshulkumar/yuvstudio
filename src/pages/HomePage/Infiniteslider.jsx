import React from 'react'
import { Canvas } from "@react-three/fiber";
import Index from "./experience/Index";

const Infiniteslider = () => {
    return (
        <div>
            <section className="slider-section">
                <Canvas
                    camera={{
                        position: [2, 0, 6],
                        fov: 20,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <Index />
                </Canvas>
            </section>
        </div>
    )
}

export default Infiniteslider
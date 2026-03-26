"use client";

import LightRays from "@/components/LightRays";
import { useTheme } from "@/components/theme-provider";
import Tabbar from "@/components/Tabbar";

export default function Home() {
  const themeContext = useTheme();
  const isDark = themeContext?.theme === "dark";

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 只在深色模式下显示背景光线效果 */}
      {isDark && (
        <LightRays 
          raysOrigin="top-center"
          raysColor="#60a5fa"
          raysSpeed={1}
          lightSpread={1}
          rayLength={2}
          pulsating={true}
          fadeDistance={1.0}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.0}
          distortion={0.0}
          className="z-0"
        />
      )}
      <Tabbar />
    </main>
  );
}

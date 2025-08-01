import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const ReactPlayer = dynamic(() => import('react-player').then(mod => mod.default), {
  ssr: false,
});
export default ReactPlayer;

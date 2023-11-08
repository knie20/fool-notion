import { useEffect } from "react";
import anime, { AnimeParams } from "animejs"
import FunctionActor from "../atoms/FunctionExhibit";
import Stage from "../atoms/Stage";
import { XY } from "../../lib/models";
import { SVG } from "@svgdotjs/svg.js";

const ID_FN1 = 'fn1';

export default function FunctionPlay() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowSize: XY = [windowWidth, windowHeight];
    const fn1Size: XY = [100, 50];
    
    return <Stage windowHeight={windowHeight} windowWidth={windowWidth}>
        <FunctionActor size={fn1Size} offset={getOffsetWithSize(fn1Size, windowSize)} exhId={ID_FN1} opacity={0}/>
    </Stage>
}

function getOffsetWithSize(size: XY, window: XY): XY {
    return [(window[0] - size[0]) / 2, (window[1] - size[1]) / 2];
}


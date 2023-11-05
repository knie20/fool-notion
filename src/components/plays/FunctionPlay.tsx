import { useEffect } from "react";
import anime, { AnimeParams } from "animejs"
import FunctionExhibit from "../atoms/FunctionExhibit";
import Stage from "../atoms/Stage";

const ID_FN1 = 'fn1';

export default function FunctionPlay() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const windowSize: XY = [windowWidth, windowHeight];
    const fn1Size: XY = [100, 100];

    useEffect(() => {
        const fnAnimation = anime({
            targets: `#${ID_FN1}`,
            translateX: 250
        })
    }, []);

    
    
    return <Stage windowHeight={windowHeight} windowWidth={windowWidth}>
        <FunctionExhibit size={fn1Size} offset={getOffsetWithSize(fn1Size, windowSize)} exhId="ID_FN1" pure={false} />
    </Stage>
}

function getOffsetWithSize(size: XY, window: XY): XY {
    return [(window[0] - size[0]) / 2, (window[1] - size[1]) / 2];
}

type XY = [x: number, y: number];
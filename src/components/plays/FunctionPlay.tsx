import { useEffect } from "react";
import anime, { AnimeParams } from "animejs"
import FunctionExhibit from "../atoms/FunctionExhibit";
import Stage from "../atoms/Stage";

export default function FunctionPlay() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let animeParams: AnimeParams = {};

    useEffect(() => {
        const fnAnimation = anime({
            targets: '#fn',
            translateX: 250
        }) 
    }, []);

    
    
    return <Stage windowHeight={windowHeight} windowWidth={windowWidth}>
        <FunctionExhibit size={[100,100]} offset={[0, windowHeight/2]} exhId="fn" pure={false} />
    </Stage>
}
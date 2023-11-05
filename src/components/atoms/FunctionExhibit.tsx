import { ExhibitProps } from "../../lib/propModels"

export default function FunctionExhibit({exhId, size, offset, opacity, pure}: FunctionExhibitProps) {
    let styles = {
        fill : '#40aea1',
        stroke:'#000000',
        strokeWidth:'0',
        strokeDasharray:'none'
    }

    let wrapperStyles = {
        position: 'absolute' as const,
        opacity: opacity !== undefined ? opacity : 1,
        top: offset[1],
        left: offset[0],
        width: size[0],
        height: size[1],
    }

    return <div
        id={exhId} 
        style={wrapperStyles}>
            <svg viewBox="0 0 100 50">
                <path
                style={styles}
                d="
                M 0,5 
                V 45 
                S 25,40 50,45
                S 75,50 100,45 
                V 5
                S 75,10 50,5
                S 25,0 0,5
                z"/>
            </svg>
        </div>
     
    
}

export interface FunctionExhibitProps extends ExhibitProps{
    pure?: boolean
}
export default function TypedObjectExhibit({anchor, size, type, isSlot}: TypedObjectProps){
    let objectNode;
    switch(type){
        case "octagon":{
            objectNode = <OctagonShapedObject isSlot={isSlot} />;
            break;
        }
        case "square": {
            objectNode = <SquareShapedObject isSlot={isSlot} />;
            break;
        }
        case "circle": {
            objectNode = <CircleShapedObject isSlot={isSlot} />;
            break;
        }
        case "star": {
            objectNode = <StarTypedObject isSlot={isSlot} />;
            break;
        }
    }

    let render = <>
        <div>
            {objectNode}
        </div>
    </>

    return render;

}

interface TypedObjectProps {
    anchor: [x: number, y: number],
    size: number,
    type: "octagon" | "square" | "circle" | "star",
    isSlot: boolean
}

function StarTypedObject({isSlot}: {isSlot: boolean}){
    return <svg
    viewBox="0 0 100 100"
    version="1.1"
    id="fn-obj-star">
 
     <path
        style={isSlot ? slotStyle : objStyle}
        d="M 
        82.136658,7.1172286 
        65.158055,-1.5970551 
        48.354008,7.4492514 
        51.395107,-11.391222 
        37.598823,-24.577357 
        l 18.858106,-2.929769 
        8.277474,-17.195787 
        8.613851,17.029776 
        18.912045,2.558555 
        -13.534453,13.45475 
        z"
        transform="matrix(1.8294419,0,0,1.9174659,-68.78486,85.716313)" />
 </svg>
}

function SquareShapedObject({isSlot}: {isSlot: boolean}){
    return <svg
    viewBox="0 0 100 100"
    id="fn-obj-square"
    >
     <rect
       style={isSlot ? slotStyle : objStyle}
       width="100"
       height="100" />
    </svg>;
}

function CircleShapedObject({isSlot}: {isSlot: boolean}){
    return <svg
    viewBox="0 0 100 100"
    id="fn-obj-circle">
    
     <ellipse
        style={isSlot ? slotStyle : objStyle}
        id="path2"
        cx="50"
        cy="50"
        rx="50"
        ry="50" />
 </svg>;
}

function OctagonShapedObject({isSlot}: {isSlot: boolean}){
    return <svg
    viewBox="0 0 100 100"
    id="fn-obj-octagon"
    >
     <path
        style={isSlot ? slotStyle : objStyle}
        d="M 
        52.052494,63.766614 
        35.710396,63.786439 
        24.140769,52.24485 
        24.120944,35.902752 
        35.662533,24.333125 
        52.004631,24.3133 
        l 11.569627,11.541589 
        0.01982,16.342098 
        z"
        transform="matrix(2.5333682,0,0,2.5333682,-61.107231,-61.59454)" />
 </svg>;
}

const objStyle = {
    fill: '#40aea1',
    strokeWidth: 0,
    stroke: '#000000'
}

const slotStyle = {
    fill: '#215755',
    strokeWidth: 1,
    stroke: '#afafaf'
}
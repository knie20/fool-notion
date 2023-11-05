import { ReactElement } from "react";

export default function TestDisplayWindow({children, size, label}: { 
    children: ReactElement,
    size: 'small' | 'medium' | 'large',
    label: string
}){
    let styleClasses = 'flex flex-col border-solid border-black border-2 p-2 h-fit ';
    switch(size){
        case 'small':{
            styleClasses += 'w-1/12 '; 
            break;
        } 
        case 'medium': {
            styleClasses += 'w-1/6 ';
            break;
        } 
        case 'large': {
            styleClasses += 'w-1/2 ';
            break;
        } 
    }

    const wrapperStyle = {
        position: 'relative' as const,
    }

    return <div className={styleClasses}>
        <h2>{label}</h2>
        <div className="shrink" style={wrapperStyle}> {children} </div>
    </div> 
}
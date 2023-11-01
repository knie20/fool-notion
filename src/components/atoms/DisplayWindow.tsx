import { ReactElement } from "react";

export default function DisplayWindow({children, size, label}: { 
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
    return <div className={styleClasses}>
        <h2>{label}</h2>
        <div className="shrink"> {children} </div>
    </div> 
}
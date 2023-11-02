export default function FunctionExhibit({}){
    let styles = {
        fill : '#40aea1',
        fillOpacity:'1',
        stroke:'#000000',
        strokeWidth:'0',
        strokeDasharray:'none'
    }

    return <div>
        <svg
        viewBox="0 0 100 50"
        id="fn-function">
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

interface FunctionExhibitProps {
    pure: boolean
}
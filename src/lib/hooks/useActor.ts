import { XY } from "../models";

export default function useActor({ isHidden, initialPosition, size, opacity }: ActorOptions) {
    
}

export interface ActorOptions {
    isHidden: boolean;
    initialPosition: XY;
    size: XY;
    opacity: number;
}
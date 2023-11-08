import { ReactElement } from "react";

export default function Stage({ children, windowHeight, windowWidth }: StageProps) {
    const styles = {
        position: 'relative' as const,
        overFlow: 'hidden' as const,
        width: windowWidth,
        height: windowHeight,
    }

    return (
        <div style={styles} id="stage">
          {children}
        </div>
      );
}

interface StageProps {
    children: ReactElement,
    windowWidth: number,
    windowHeight: number
}
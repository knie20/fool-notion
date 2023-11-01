import { ReactNode } from "react";

export default function TestWrapper({ children }: { children: ReactNode}) {
    return <div>
        { children }
    </div>
}
import { ReactElement, ReactNode } from 'react';
import TestDisplayWindow from '../atoms/TestDisplayWindow';

export default function TestWrapper({ children }: { children: ReactElement}) {
    let props = children.props;
    

    return <div className='flex flex-row gap-4 bg-slate-500'>
        <TestDisplayWindow size="small" label="Small">
            { children }
        </TestDisplayWindow>
        <TestDisplayWindow size="medium" label="Medium">
            { children }
        </TestDisplayWindow>
        <TestDisplayWindow size="large" label="Large">
            { children }
        </TestDisplayWindow>

    </div>
}


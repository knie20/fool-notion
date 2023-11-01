import { ReactElement, ReactNode } from 'react';
import DisplayWindow from '../atoms/DisplayWindow';

export default function TestWrapper({ children }: { children: ReactElement}) {
    let props = children.props;
    

    return <div className='flex flex-row gap-4 bg-slate-500'>
        <DisplayWindow size="small" label="Small">
            { children }
        </DisplayWindow>
        <DisplayWindow size="medium" label="Medium">
            { children }
        </DisplayWindow>
        <DisplayWindow size="large" label="Large">
            { children }
        </DisplayWindow>

    </div>
}


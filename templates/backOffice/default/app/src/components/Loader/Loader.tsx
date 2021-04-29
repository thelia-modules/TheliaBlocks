import React from 'react';
import { ReactComponent as LoaderIcon } from './loader.svg';

function Loader({ width }: { width: string }) {
    return (
        <div className="flex items-center justify-center h-full">
            <LoaderIcon width={width} />
        </div>
    );
}

export default Loader;
import { ReactNode } from 'react';


interface ContainerProps {
    children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div className={`w-full max-w-7xl mx-auto px-4 `}>
            {children}
        </div>
    );
};

export default Container;



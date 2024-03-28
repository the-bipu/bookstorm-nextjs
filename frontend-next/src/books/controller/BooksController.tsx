import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const BooksController = (props?: any) => {
    const {
        children,
        ...rest
    } = props;

    const [loading, setLoading] = useState<boolean>(false);

    const viewProps = {
        loading,
        setLoading,
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...rest, ...viewProps });
        }

        return child;
    });

    return (
        <div>
            <Navbar />
            {childrenWithProps}
            <Footer />
        </div>
    );
};

export { BooksController };
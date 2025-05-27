import React, { useEffect, useRef } from 'react';
import { useGridContext } from './GridProvider';

const InfiniteLoader: React.FC = () => {
    const { state, dispatch, loadMore, loadingComponent } = useGridContext();
    const scrollContainerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        scrollContainerRef.current = document.getElementById('grid-scroll-container');
    }, []);

    useEffect(() => {
        if (state.mode !== 'auto' || !loadMore || !state.hasMore || state.loading) {
            return;
        }

        const handleScroll = () => {
            if (!scrollContainerRef.current) {
                return;
            }

            const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
            const scrollPosition = (scrollTop + clientHeight) / scrollHeight;

            if (scrollPosition > state.threshold && !state.loading) {
                dispatch({ type: 'SET_LOADING', payload: true });

                loadMore()
                    .finally(() => {
                        dispatch({ type: 'SET_LOADING', payload: false });
                    });
            }
        };

        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, [state.mode, loadMore, state.hasMore, state.loading, state.threshold, dispatch]);

    if (!state.loading) {
        return null;
    }

    return (
        <>
            {loadingComponent || (
                <div className="col-span-full text-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                    <p className="mt-2">Loading more products...</p>
                </div>
            )}
        </>
    );
};

export default InfiniteLoader;

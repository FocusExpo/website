
import { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import './AnimatedList.css';

function AnimatedList({
    items,
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = '',
    itemClassName = '',
    displayScrollbar = true,
    initialSelectedIndex = -1,
}) {
    const listRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState(false);
    const [topGradientOpacity, setTopGradientOpacity] = useState(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        setTopGradientOpacity(Math.min(scrollTop / 50, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(
            Math.min(bottomDistance / 50, 1)
        );
    };

    // Keyboard navigation: arrow keys, Home, End
    useEffect(() => {
        if (!enableArrowNavigation) return;

        const handleKeyDown = (e) => {
            if (
                !listRef.current ||
                !listRef.current.contains(document.activeElement)
            ) {
                return;
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) =>
                    Math.min(prev + 1, items.length - 1)
                );
            } else if (e.key === 'Home') {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(0);
            } else if (e.key === 'End') {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(items.length - 1);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedIndex >= 0) {
                    onItemSelect?.(items[selectedIndex], selectedIndex);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () =>
            window.removeEventListener('keydown', handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    // Scroll the selected item into view if keyboard navigation is active
    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current)
            return;

        const list = listRef.current;
        const selectedItem = list.children[selectedIndex];
        if (!selectedItem) return;

        const listRect = list.getBoundingClientRect();
        const itemRect = selectedItem.getBoundingClientRect();

        if (itemRect.top < listRect.top) {
            list.scrollTop -= listRect.top - itemRect.top;
        } else if (itemRect.bottom > listRect.bottom) {
            list.scrollTop += itemRect.bottom - listRect.bottom;
        }
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`scroll-list-container ${className}`}>
            <div
                ref={listRef}
                className={`scroll-list ${!displayScrollbar ? 'no-scrollbar' : ''
                    }`}
                onScroll={handleScroll}
                tabIndex={0}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        onClick={() => {
                            setKeyboardNav(false);
                            setSelectedIndex(index);
                            onItemSelect?.(item, index);
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.05,
                            ease: 'easeOut',
                        }}
                        className={`item ${selectedIndex === index ? 'selected' : ''
                            } ${itemClassName}`}
                    >
                        {/* 
               Check if item is React node or complex object.
               If user passes strings, render directly.
               If user passes content under specific formatting, render that.
            */}
                        {typeof item === 'string' ? (
                            <p className="item-text">{item}</p>
                        ) : (
                            // If item is object, user of component should probably pass 
                            // children or component handles it. 
                            // BUT current request implies usage like: items={['Item 1'...]}
                            // The user wants to use it for Agenda Items which are complex.
                            // We will handle rendering of the item in the parent or expect item to be renderable.
                            // If item is an object from our previous Agenda items list, we need to adapt.
                            // Actually, standard usage usually passes a component or render prop, 
                            // but this simplified version just renders {item}.
                            // We'll update Agenda.jsx to pass rendered JSX/Components as items or 
                            // update this to handle specific object structure.
                            // The example says items=['Item 1'...] but we need to render complex cards.
                            // We will assume `item` can be a React Node (JSX).
                            item
                        )}
                    </motion.div>
                ))}
            </div>
            {showGradients && (
                <>
                    <div
                        className="top-gradient"
                        style={{ opacity: topGradientOpacity }}
                    ></div>
                    <div
                        className="bottom-gradient"
                        style={{ opacity: bottomGradientOpacity }}
                    ></div>
                </>
            )}
        </div>
    );
}

export default AnimatedList;

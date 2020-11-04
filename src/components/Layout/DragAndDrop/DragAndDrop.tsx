import React, { SyntheticEvent, useRef, useState } from "react";
import { Adjuster } from "./DragAndDropStyles";

interface DragAndDropProps {
    onDragEnd(offset: number): void;
}

export const DragAndDrop = ({ onDragEnd }: DragAndDropProps) => {
    const [pageX, setPageX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const adjusterRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (event: SyntheticEvent) => {
        event.preventDefault();

        const offsetX = adjusterRef.current ? adjusterRef.current.getBoundingClientRect().x : 0;

        const handleMouseMove = (event: MouseEvent) => {
            setPageX(event.pageX - offsetX);
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);

            if (adjusterRef.current) {
                onDragEnd(adjusterRef.current.getBoundingClientRect().x);
                setPageX(0);
            }

            setIsDragging(false);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        setIsDragging(true);
    };

    return (
        <Adjuster ref={adjusterRef} isDragging={isDragging} style={{ right: -pageX }} onMouseDown={handleMouseDown} />
    );
};

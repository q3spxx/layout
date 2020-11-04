import React, { ReactElement, useEffect, useState } from "react";
import { useLayout } from "../LayoutProvider";
import {
    GridWrapper,
    GridWrapperContent,
    GridWrapperMain,
    GridWrapperNavigationSidebar,
    GridWrapperNavigationStructure,
    GridWrapperNavigationHeader,
    LayoutWrapper,
} from "../LayoutStyled";
import { NAVIGATION_SIDEBAR_WIDTH, NAVIGATION_STRUCTURE_ANIMATION_DURATION } from "../LayoutConstants";
import { LayoutModes } from "../LayoutTypes";
import { CSSTransition } from "react-transition-group";
import { DragAndDrop } from "../DragAndDrop/DragAndDrop";
import { NAVIGATION_UNIT_HEADER_HEIGHT } from "./UnitLayoutConstants";
import { getStructureState, getStructureWidth } from "./UnitLayoutServices";

interface UnitLayoutProps {
    navigationSidebar: ReactElement;
    navigationStructure: ReactElement;
    navigationHeader: ReactElement;
    content: ReactElement;
}

export function UnitLayout({ navigationSidebar, navigationHeader, navigationStructure, content }: UnitLayoutProps) {
    const { layoutMode, setLayoutMode } = useLayout();
    const [animation, setAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [structureWidth, setStructureWidth] = useState(getStructureWidth());

    useEffect(() => {
        setLayoutMode(getStructureState() as LayoutModes);
    }, [setLayoutMode]);

    useEffect(() => {
        if (layoutMode === LayoutModes.STRUCTURE_OPEN) {
            setIsOpen(true);
            setAnimation(true);
            localStorage.setItem("structureState", LayoutModes.STRUCTURE_OPEN);
        }

        if (layoutMode === LayoutModes.STRUCTURE_CLOSE) {
            setAnimation(false);
        }
    }, [layoutMode]);

    const handlerExited = () => {
        setIsOpen(false);
        localStorage.setItem("structureState", LayoutModes.STRUCTURE_CLOSE);
    };

    const handleDragEnd = (offset: number) => {
        const width = offset - NAVIGATION_SIDEBAR_WIDTH;
        localStorage.setItem("structureWidth", width.toString());
        setStructureWidth(width);
    };

    return (
        <LayoutWrapper structureWidth={structureWidth}>
            <CSSTransition
                in={isOpen && animation}
                classNames="animation"
                appear
                timeout={NAVIGATION_STRUCTURE_ANIMATION_DURATION}
                onExited={handlerExited}
            >
                <GridWrapper>
                    <GridWrapperNavigationSidebar>{navigationSidebar}</GridWrapperNavigationSidebar>
                    {isOpen && (
                        <GridWrapperNavigationStructure>
                            <>
                                <DragAndDrop onDragEnd={handleDragEnd} />
                                {navigationStructure}
                            </>
                        </GridWrapperNavigationStructure>
                    )}
                    <GridWrapperMain>
                        <GridWrapperNavigationHeader headerHeight={NAVIGATION_UNIT_HEADER_HEIGHT}>
                            {navigationHeader}
                        </GridWrapperNavigationHeader>
                        <GridWrapperContent headerHeight={NAVIGATION_UNIT_HEADER_HEIGHT}>{content}</GridWrapperContent>
                    </GridWrapperMain>
                </GridWrapper>
            </CSSTransition>
        </LayoutWrapper>
    );
}

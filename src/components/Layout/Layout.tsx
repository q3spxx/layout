import React, { useEffect, useState } from "react";
import { useLayout } from "./LayoutProvider";
import { GridWrapper, GridWrapperContent, GridWrapperMain, GridWrapperNavigationSidebar, GridWrapperNavigationStructure, GridWrapperNavigationHeader } from "./LayoutStyled";
import { NAVIGATION_STRUCTURE_ANIMATION_DURATION } from "./LayoutConstants";
import { LayoutModes, LayoutProps } from "./LayoutTypes";
import { CSSTransition } from "react-transition-group";

export function Layout({ navigationSidebar, navigationHeader, navigationStructure, content }: LayoutProps) {
    const { layoutMode } = useLayout();
    const [animation, setAnimation] = useState(false);
    const [isOpen, setIsOpen] = useState(layoutMode === LayoutModes.STRUCTURE_OPEN);

    useEffect(() => {
        if (layoutMode === LayoutModes.STRUCTURE_OPEN) {
            setIsOpen(true);
            setAnimation(true);
        }

        if (layoutMode === LayoutModes.STRUCTURE_CLOSE) {
            setAnimation(false);
        }
    }, [layoutMode]);

    const handlerExited = () => {
        setIsOpen(false);
    };

    return (
        <CSSTransition in={isOpen && animation} classNames="animation" appear timeout={NAVIGATION_STRUCTURE_ANIMATION_DURATION} onExited={handlerExited}>
            <GridWrapper direction="row" container>
                <GridWrapperNavigationSidebar item>{navigationSidebar}</GridWrapperNavigationSidebar>
                {isOpen && <GridWrapperNavigationStructure item>{navigationStructure}</GridWrapperNavigationStructure>}
                <GridWrapperMain container direction="column">
                    <GridWrapperNavigationHeader height={108} structure={isOpen} item>
                        {navigationHeader}
                    </GridWrapperNavigationHeader>
                    <GridWrapperContent structure={isOpen} headerHeight={108}>
                        {content}
                    </GridWrapperContent>
                </GridWrapperMain>
            </GridWrapper>
        </CSSTransition>
    );
}

import React, { ReactNode } from "react";
import { NAVIGATION_HEADER_HEIGHT } from "../LayoutConstants";
import {
    GridWrapper,
    GridWrapperContent,
    GridWrapperMain,
    GridWrapperNavigationSidebar,
    GridWrapperNavigationHeader,
} from "../LayoutStyled";

interface ErrorLayoutProps {
    children: [ReactNode, ReactNode, ReactNode];
}

export function LandingLayout({ children }: ErrorLayoutProps) {
    return (
        <GridWrapper>
            <GridWrapperNavigationSidebar>{children[0]}</GridWrapperNavigationSidebar>
            <GridWrapperMain>
                <GridWrapperNavigationHeader headerHeight={NAVIGATION_HEADER_HEIGHT}>
                    {children[1]}
                </GridWrapperNavigationHeader>
                <GridWrapperContent headerHeight={NAVIGATION_HEADER_HEIGHT}>{children[2]}</GridWrapperContent>
            </GridWrapperMain>
        </GridWrapper>
    );
}

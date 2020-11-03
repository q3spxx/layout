import React, { ReactNode } from "react";
import { NAVIGATION_HEADER_HEIGHT } from "../LayoutConstants";
import { GridWrapper, GridWrapperContent, GridWrapperMain, GridWrapperNavigationSidebar, GridWrapperNavigationHeader } from "../LayoutStyled";

export interface ErrorLayoutProps {
    children: [ReactNode, ReactNode, ReactNode];
}

export function LandingLayout({ children }: ErrorLayoutProps) {
    return (
        <GridWrapper direction="row" container>
            <GridWrapperNavigationSidebar item>{children[0]}</GridWrapperNavigationSidebar>
            <GridWrapperMain container direction="column">
                <GridWrapperNavigationHeader height={NAVIGATION_HEADER_HEIGHT} item>
                    {children[1]}
                </GridWrapperNavigationHeader>
                <GridWrapperContent headerHeight={NAVIGATION_HEADER_HEIGHT}>{children[2]}</GridWrapperContent>
            </GridWrapperMain>
        </GridWrapper>
    );
}

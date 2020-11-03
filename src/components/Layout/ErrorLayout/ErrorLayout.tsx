import React, { ReactNode } from "react";
import { GridWrapper, GridWrapperContent, GridWrapperMain, GridWrapperNavigationSidebar } from "../LayoutStyled";

export interface ErrorLayoutProps {
    children: [ReactNode, ReactNode];
}

export function ErrorLayout({ children }: ErrorLayoutProps) {
    return (
        <GridWrapper direction="row" container>
            <GridWrapperNavigationSidebar>{children[0]}</GridWrapperNavigationSidebar>
            <GridWrapperMain direction="column" container>
                <GridWrapperContent headerHeight={0}>{children[1]}</GridWrapperContent>
            </GridWrapperMain>
        </GridWrapper>
    );
}

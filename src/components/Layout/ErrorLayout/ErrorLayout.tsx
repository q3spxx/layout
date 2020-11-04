import React, { ReactNode } from "react";
import { GridWrapper, GridWrapperContent, GridWrapperMain, GridWrapperNavigationSidebar } from "../LayoutStyled";

interface ErrorLayoutProps {
    children: [ReactNode, ReactNode];
}

export function ErrorLayout({ children }: ErrorLayoutProps) {
    return (
        <GridWrapper>
            <GridWrapperNavigationSidebar>{children[0]}</GridWrapperNavigationSidebar>
            <GridWrapperMain>
                <GridWrapperContent headerHeight={0}>{children[1]}</GridWrapperContent>
            </GridWrapperMain>
        </GridWrapper>
    );
}

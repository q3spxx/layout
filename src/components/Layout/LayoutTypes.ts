import { ReactElement } from "react";

export interface LayoutInstance {
    element?: HTMLElement;
    classNames: string;
    layoutModeCurrent?: LayoutModes;
    layoutModeDeferred?: LayoutModes;
    layoutModeRequest?: LayoutModes;
    changeLayoutMode?: (_: LayoutModes) => void;
}

export interface LayoutProps {
    navigationSidebar?: ReactElement;
    navigationStructure?: ReactElement;
    navigationHeader?: ReactElement;
    content?: ReactElement;
}

export enum LayoutModes {
    SIDEBAR_HEADER_CONTENT = "SIDEBAR_HEADER_CONTENT",
    SIDEBAR_STRUCTURE_HEADER_CONTENT = "SIDEBAR_STRUCTURE_HEADER_CONTENT",
    SIDEBAR_CONTENT = "SIDEBAR_CONTENT",
    STRUCTURE_OPEN = "STRUCTURE_OPEN",
    STRUCTURE_CLOSE = "STRUCTURE_CLOSE",
}

export interface LayoutContextInterface {
    layoutMode: LayoutModes;
    setLayoutMode: (_: LayoutModes) => void;
}

export interface LayoutInstance {
    element?: HTMLElement;
    classNames: string;
    layoutModeCurrent?: LayoutModes;
    layoutModeDeferred?: LayoutModes;
    layoutModeRequest?: LayoutModes;
    changeLayoutMode?: (_: LayoutModes) => void;
}

export enum LayoutModes {
    STRUCTURE_OPEN = "STRUCTURE_OPEN",
    STRUCTURE_CLOSE = "STRUCTURE_CLOSE",
}

export interface LayoutContextInterface {
    layoutMode: LayoutModes;
    setLayoutMode: (_: LayoutModes) => void;
}

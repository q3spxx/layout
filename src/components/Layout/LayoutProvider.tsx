import React, { createContext, useContext, useState, PropsWithChildren } from "react";
import { LayoutContextInterface, LayoutModes } from "./LayoutTypes";

export const LayoutContext = createContext<LayoutContextInterface>({
    layoutMode: LayoutModes.SIDEBAR_HEADER_CONTENT,
    setLayoutMode: (_: LayoutModes) => {},
});

export const useLayout = () => useContext(LayoutContext);

export function LayoutProvider({ children }: PropsWithChildren<{}>) {
    const [layoutMode, setLayoutMode] = useState<LayoutModes>(LayoutModes.SIDEBAR_HEADER_CONTENT);

    return <LayoutContext.Provider value={{ layoutMode, setLayoutMode }}>{children}</LayoutContext.Provider>;
}

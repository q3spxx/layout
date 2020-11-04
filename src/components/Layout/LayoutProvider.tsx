import React, { createContext, useContext, useState, PropsWithChildren } from "react";
import { LayoutContextInterface, LayoutModes } from "./LayoutTypes";

export const LayoutContext = createContext<LayoutContextInterface>({
    layoutMode: LayoutModes.STRUCTURE_OPEN,
    setLayoutMode: (_: LayoutModes) => {},
});

export const useLayout = () => useContext(LayoutContext);

export function LayoutProvider({ children }: PropsWithChildren<{}>) {
    const [layoutMode, setLayoutMode] = useState<LayoutModes>(LayoutModes.STRUCTURE_OPEN);

    return <LayoutContext.Provider value={{ layoutMode, setLayoutMode }}>{children}</LayoutContext.Provider>;
}

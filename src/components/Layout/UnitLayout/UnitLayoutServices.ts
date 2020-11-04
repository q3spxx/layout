import { NAVIGATION_STRUCTURE_WIDTH } from "../LayoutConstants";
import { LayoutModes } from "../LayoutTypes";

export const getStructureWidth = () => {
    const width = localStorage.getItem("structureWidth");
    return width ? Number(width) : NAVIGATION_STRUCTURE_WIDTH;
};

export const getStructureState = () => {
    return localStorage.getItem("structureState") || LayoutModes.STRUCTURE_CLOSE;
};

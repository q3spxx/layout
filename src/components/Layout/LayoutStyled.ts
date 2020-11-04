import styled from "styled-components";
import { NAVIGATION_SIDEBAR_WIDTH, NAVIGATION_STRUCTURE_ANIMATION_DURATION } from "./LayoutConstants";

export const GridWrapperNavigationSidebar = styled.div`
    width: ${NAVIGATION_SIDEBAR_WIDTH}px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
    box-sizing: border-box;
`;

export const GridWrapperNavigationStructure = styled.div`
    height: 100%;
    position: fixed;
    z-index: 1001;
    top: 0;
    left: ${NAVIGATION_SIDEBAR_WIDTH}px;
    width: 0;
    transition: width ${NAVIGATION_STRUCTURE_ANIMATION_DURATION}ms ease;
    box-sizing: border-box;
`;

export const GridWrapperMain = styled.div`
    flex: 1 1 auto;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
    display: flex;
    box-sizing: border-box;
`;

export const GridWrapperNavigationHeader = styled.div<{ headerHeight: number }>`
    flex: 0 0 ${({ headerHeight }) => headerHeight}px;
    position: fixed;
    margin: 0;
    box-sizing: border-box;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: ${NAVIGATION_SIDEBAR_WIDTH}px;
    transition: padding-left ${NAVIGATION_STRUCTURE_ANIMATION_DURATION}ms ease;
    height: ${({ headerHeight }) => headerHeight}px;
`;

export const GridWrapperContent = styled.div<{ headerHeight: number }>`
    margin: 0;
    box-sizing: border-box;
    padding-top: ${({ headerHeight }) => headerHeight}px;
    padding-left: ${NAVIGATION_SIDEBAR_WIDTH}px;
    transition: padding-left ${NAVIGATION_STRUCTURE_ANIMATION_DURATION}ms ease;
`;

export const GridWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

export const LayoutWrapper = styled.div<{ structureWidth: number }>`
    height: 100%;
    width: 100%;

    & > div.animation-enter-active {
        ${GridWrapperNavigationStructure} {
            width: ${({ structureWidth }) => structureWidth}px;
        }
        ${GridWrapperNavigationHeader} {
            padding-left: ${({ structureWidth }) => NAVIGATION_SIDEBAR_WIDTH + structureWidth}px;
        }
        ${GridWrapperContent} {
            padding-left: ${({ structureWidth }) => NAVIGATION_SIDEBAR_WIDTH + structureWidth}px;
        }
    }

    & > div.animation-enter-done {
        ${GridWrapperNavigationStructure} {
            width: ${({ structureWidth }) => structureWidth}px;
        }
        ${GridWrapperNavigationHeader} {
            padding-left: ${({ structureWidth }) => NAVIGATION_SIDEBAR_WIDTH + structureWidth}px;
        }
        ${GridWrapperContent} {
            padding-left: ${({ structureWidth }) => NAVIGATION_SIDEBAR_WIDTH + structureWidth}px;
        }
    }

    & > div.animation-exit-active {
        ${GridWrapperNavigationStructure} {
            width: 0;
        }
        ${GridWrapperNavigationHeader} {
            padding-left: ${NAVIGATION_SIDEBAR_WIDTH}px;
        }
        ${GridWrapperContent} {
            padding-left: ${NAVIGATION_SIDEBAR_WIDTH}px;
        }
    }
`;

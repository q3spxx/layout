import styled from "styled-components";

export const Adjuster = styled.div<{ isDragging: boolean }>`
    height: 100%;
    width: 0px;
    position: absolute;
    right: 0;

    &:after {
        content: "";
        position: absolute;
        left: -2px;
        height: 100%;
        width: 4px;
        background-color: ${({ isDragging }) => isDragging && "green"};
    }

    &:before {
        content: "";
        position: absolute;
        left: -5px;
        height: 100%;
        width: 10px;
        z-index: 1;
        cursor: col-resize;
    }
`;

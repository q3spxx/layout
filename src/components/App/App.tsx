import "./index.scss";
import React, { useState } from "react";
import { LoremIpsum } from "../LoremIpsum";
import { Layout, useLayout, LayoutModes } from "../Layout";
import { LandingLayout } from "../Layout/LandingLayout/LandingLayout";
import { ErrorLayout } from "../Layout/ErrorLayout/ErrorLayout";

function NavigationSidebar() {
    const { setLayoutMode } = useLayout();
    return <div className="navigationSidebar" onClick={() => setLayoutMode(LayoutModes.STRUCTURE_OPEN)}></div>;
}

function NavigationStructure() {
    const { setLayoutMode } = useLayout();
    return <div className="navigationStructure" onClick={() => setLayoutMode(LayoutModes.STRUCTURE_OPEN)}></div>;
}

function NavigationHeader() {
    const { setLayoutMode } = useLayout();
    return <div className="navigationHeader" onClick={() => setLayoutMode(LayoutModes.STRUCTURE_CLOSE)}></div>;
}

function Content() {
    return <div className="content">{LoremIpsum}</div>;
}

export function App() {
    const [route, setRoute] = useState("/unit");

    return (
        <>
            <div style={{ position: "fixed", zIndex: 10000 }}>
                <button onClick={() => setRoute("/unit")}>/unit</button>
                <button onClick={() => setRoute("/landing")}>/landing</button>
                <button onClick={() => setRoute("/not-found")}>/not-found</button>
            </div>
            {route === "/unit" && <Layout content={<Content />} navigationHeader={<NavigationHeader />} navigationSidebar={<NavigationSidebar />} navigationStructure={<NavigationStructure />} />}
            {route === "/landing" && (
                <LandingLayout>
                    <NavigationSidebar />
                    <NavigationHeader />
                    <Content />
                </LandingLayout>
            )}
            {route === "/not-found" && (
                <ErrorLayout>
                    <NavigationSidebar />
                    <Content />
                </ErrorLayout>
            )}
        </>
    );
}

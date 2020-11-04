import "./index.scss";
import React from "react";
import { LoremIpsum } from "../LoremIpsum";
import { UnitLayout, ErrorLayout, LandingLayout, useLayout, LayoutModes } from "../Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ToogleButton = () => {
    const { layoutMode, setLayoutMode } = useLayout();

    const handleClick = () => {
        if (layoutMode === LayoutModes.STRUCTURE_OPEN) {
            setLayoutMode(LayoutModes.STRUCTURE_CLOSE);
        } else {
            setLayoutMode(LayoutModes.STRUCTURE_OPEN);
        }
    };

    return <button onClick={handleClick}>s</button>;
};

const Links = () => (
    <ul>
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
            <Link to="/unit-1">unit-1</Link>
        </li>
        <li>
            <Link to="/unit-2">unit-2</Link>
        </li>
        <li>
            <Link to="/not-found">not-found</Link>
        </li>
    </ul>
);

const NavigationSidebar = () => {
    return (
        <div className="navigationSidebar">
            <ToogleButton />
            <Links />
        </div>
    );
};

const NavigationSidebar2 = () => {
    return (
        <div className="navigationSidebar">
            <Links />
        </div>
    );
};

const NavigationStructure = () => {
    const { setLayoutMode } = useLayout();
    return (
        <div className="navigationStructure" onClick={() => setLayoutMode(LayoutModes.STRUCTURE_CLOSE)}>
            <Links />
        </div>
    );
};

const NavigationHeader = () => {
    return (
        <div className="navigationHeader">
            <ToogleButton />
            <Links />
        </div>
    );
};

const NavigationHeader2 = () => {
    return (
        <div className="navigationHeader2">
            <Links />
        </div>
    );
};

const Content = () => {
    return (
        <div className="content">
            <div>Content1</div>
            {LoremIpsum}
        </div>
    );
};

const Content2 = () => {
    return (
        <div className="content">
            <div>Content2</div>
            {LoremIpsum}
        </div>
    );
};

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/not-found" exact>
                    <ErrorLayout>
                        <NavigationSidebar2 />
                        <Content />
                    </ErrorLayout>
                </Route>
                <Route path="/unit-1" exact>
                    <UnitLayout
                        content={<Content />}
                        navigationHeader={<NavigationHeader />}
                        navigationSidebar={<NavigationSidebar />}
                        navigationStructure={<NavigationStructure />}
                    />
                </Route>
                <Route path="/unit-2" exact>
                    <UnitLayout
                        content={<Content2 />}
                        navigationHeader={<NavigationHeader />}
                        navigationSidebar={<NavigationSidebar />}
                        navigationStructure={<NavigationStructure />}
                    />
                </Route>
                <Route path="/">
                    <LandingLayout>
                        <NavigationSidebar2 />
                        <NavigationHeader2 />
                        <Content />
                    </LandingLayout>
                </Route>
            </Switch>
        </Router>
    );
};

//@flow
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { helloName } from "./lib.js";
const DynamicComponent = lazy(() => import("./dynamic-component.jsx"));

/**
 * When the button is clicked, `DynamicComponent` will have to be rendered for the first time,
 * and will be loaded in the browser.
 */
const App = () => {
    const [componentLoaded, loadComponent] = useState(false);
    return <main>
        <h1>React rollup example</h1>
        {
            componentLoaded ? (
                <Suspense fallback={<div>Loading ...</div>}>
                    <DynamicComponent />
                </Suspense>
            ) : (
                <button data-cy="btn-load-component" onClick={() => {
                    loadComponent(true);
                }}>Load component</button>
            )
        }
        <p>{helloName("World")}</p>
    </main>;
}

ReactDOM.render(
    <App />,
    document.getElementById("app-container")
);
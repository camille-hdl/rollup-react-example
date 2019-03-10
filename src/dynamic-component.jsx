//@flow
import React from "react";

export default function DynamicComponent() {
    return <h2 data-cy="dynamic-component">I am lazily loaded</h2>;
};
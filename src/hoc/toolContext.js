import React from 'react';

const emitterContext = {
    emitter: null,
};

export const ToolContext = React.createContext(emitterContext.emitter);

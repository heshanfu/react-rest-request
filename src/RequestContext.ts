import * as React from 'react';

import { Context } from './declarations';

const defaultState = {
    startRequest: () => {},
    stopRequest: () => {},
    state: {},
};

// tslint:disable-next-line variable-name
export const RequestContext = React.createContext<Context>(
    defaultState,
);

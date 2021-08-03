import { whenAdded } from "when-elements";
import { render, h } from "preact";
import htm from "htm";
import { hooked, dropEffect, hasEffect, useEffect } from "uhooks";
const html = htm.bind(h);

const when = (selector, callback) => {
    const X = (element) => {
        const Y = (callback) => {
            render(callback, element);
        };
        const hook = hooked(Y);
        hook(callback);
        return () => {
            if (hasEffect(hook)) {
                dropEffect(hook);
            }
        };
    };
    whenAdded(selector, X);
};

export { when, h, html, render };
export {
    createContext, useContext,
    useCallback, useMemo,
    useEffect, useLayoutEffect,
    useReducer, useState,
    useRef
} from 'uhooks';
export {
    createContext, useContext,
    useCallback, useMemo,
    useEffect, useLayoutEffect,
    useReducer, useState,
    useRef
} from 'uhooks';
export { render, h } from 'preact';
import { ComponentChild } from 'preact';
const html = htm.bind(h);
function when(selector: string, callback: ComponentChild): void;
export { when, html };
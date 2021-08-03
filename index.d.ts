export {
    createContext, useContext,
    useCallback, useMemo,
    useEffect, useLayoutEffect,
    useReducer, useState,
    useRef
} from 'uhooks';

export { html, render, svg } from 'uhtml';
import { createPragma } from 'jsx2tag';
const h = createPragma(html);
export type Callback = (element: HTMLElement, props: any, slots: any) => void;
function when(selector: string, callback: Callback): void;
export { when, h };
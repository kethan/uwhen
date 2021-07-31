export {
    createContext, useContext,
    useCallback, useMemo,
    useEffect, useLayoutEffect,
    useReducer, useState,
    useRef
} from 'uhooks';

export type Callback = (element: HTMLElement, props: any) => void;
export function when(selector: string, callback: Callback): void;
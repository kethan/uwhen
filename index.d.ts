export type Callback = (element: HTMLElement, props: any, children: any) => void;
export function when(selector: string, callback: Callback): void;
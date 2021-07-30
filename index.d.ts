export type Callback = (element: HTMLElement, props: any, children: any) => void;
export default function when(selector: string, callback: Callback): void;
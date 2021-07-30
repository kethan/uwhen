export type Callback = (element: HTMLElement, props: any, children: any) => void;
export default function (selector: string, callback: Callback): void;
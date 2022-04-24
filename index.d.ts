type LifeCycleCallback = {
    connected: () => {};
    disconnected: () => {};
    attributeChanged: (name: string, oldValue: string, newValue: string) => void;
    observedAttributes: string[];
}
type Callback = ((el: HTMLElement) => LifeCycleCallback);

function when(selector: string, callback: Callback): void;
export { when };
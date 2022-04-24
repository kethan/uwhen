type LifeCycleCallback = {
    connected: () => {};
    disconnected: () => {};
    attributeChanged: (name: string, oldValue: string, newValue: string) => void;
    observedAttributes: string[];
}
type Callback = ((el: HTMLElement) => LifeCycleCallback);
declare function when(selector: string, callback: Callback): void;
export default when;
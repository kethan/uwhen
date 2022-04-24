const whenCallbacks = new Set();
const mapElements = new Map();
const mutationObserver = new window.MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "attributes") {
            const { target, attributeName, oldValue } = mutation;
            if (mapElements.has(target)) {
                let [attributeChanged, observedAttributes] = mapElements.get(target);
                if (observedAttributes.includes(attributeName) || observedAttributes.length == 0) {
                    const value = target.getAttribute(attributeName);
                    attributeChanged(attributeName, oldValue, value, target);
                }
            }
        }
    }
    whenCallbacks.forEach((callback) => callback());
});
mutationObserver.observe(document, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true
});

export default function when(selector, callback) {
    setTimeout(check);
    whenCallbacks.add(check);
    function check() {
        document.querySelectorAll(selector).forEach((element) => {
            if (!mapElements.has(element)) {
                const { connected = () => { }, disconnected = () => { }, attributeChanged = () => { }, observedAttributes = [] } = callback(element);
                mapElements.set(element, [attributeChanged, observedAttributes]);
                connected();
                removed(selector, element, () => disconnected());
            } else return;
        });
    }
}

function removed(selector, target, callback) {
    setTimeout(check);
    whenCallbacks.add(check);
    function check() {
        if (target && document.contains(target) && target.matches(selector)) {
            return;
        }
        mapElements.delete(target);
        whenCallbacks.delete(check);
        callback();
    }
}

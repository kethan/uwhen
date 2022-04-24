Custom elements without customElements.define

```js
import when from "uwhen";

(() => {
	setTimeout(() => {
		const el = document.getElementById("tag");
		el.setAttribute("val", "UWhen");
		setTimeout(() => {
			el.remove();
		}, 2000);
	}, 2000);
})();

when("my-tag", (el) => {
	return {
		connected: () => (el.textContent = `Hello ${el.getAttribute("val")}`),
		disconnected: () => console.log("disconnected", el),
		attributeChanged: (name, oldValue, newValue) =>
			(el.textContent = `Hello ${newValue}`),
		observedAttributes: ["val"],
	};
});
```

```html
<my-tag val="World" id="tag"></my-tag>
```

Courtesy: [`When-elements`](https://github.com/indiana-university/when-elements)

```jsx
import { h, render, when, useState, useEffect } from "uwhen";

setTimeout(() => {
	const ele = document.getElementById("another-tag");
	ele.remove();
}, 3000);

when("another-tag", (element, props, kids) => {
	useEffect(() => {
		console.log("another-tag FX on");
		return () => console.log("another tag removed");
	}, []);
	render(
		element,
		<div>
			<div>another-tag content</div>
			<div>{kids.three}</div>
		</div>
	);
});

when("my-counter", (element, props, slots) => {
	const [count, setCount] = useState(parseInt(props.counter) || 0);
	useEffect(() => {
		console.log("my-counter on");
		return () => console.log("my-counter removed");
	}, []);

	render(
		element,
		<div>
			<button onclick={() => setCount(count - 1)}>-</button>
			<div>Counter: {count}</div>
			<button onclick={() => setCount(count + 1)}>+</button>
			<div>{slots.one}</div>
			<div>{slots.two}</div>
		</div>
	);
});
```

```html
<my-counter counter="10">
	<div slot="one">my counter tag slot one</div>
	<div slot="two">
		<another-tag id="another-tag">
			<div slot="three">another tag slot three</div>
		</another-tag>
	</div>
</my-counter>
```

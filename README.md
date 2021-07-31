```js
import { render } from "preact";
import { when, useState, useEffect } from "uwhen";

when("my-counter", (element, props) => {
	const [count, setCount] = useState(parseInt(props.counter) || 0);
	useEffect(() => {
		console.log("FX on");
		return () => console.log("FX off");
	}, []);

	render(
		<div>
			<button class="large btn" onclick={() => setCount(count - 1)}>
				-
			</button>
			<span class="large value"> {count} </span>
			<button class="large btn" onclick={() => setCount(count + 1)}>
				+
			</button>
		</div>,
		element
	);
});
```

```html
<my-counter counter="10"></my-counter>
```

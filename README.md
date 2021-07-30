```js
import { render } from "preact";
import when from "uwhen";
import { useState, useEffect } from "uhooks";

when("my-counter", (element, props, children) => {
    const [count, update] = useState(0);
    // const [children] = useState([...element.childNodes]);
    useEffect(() => {
      console.log("FX on");
      return () => console.log("FX off");
    }, []);

    render(
      <div>
        <div>{children}</div>
        <button class="large btn" onclick={() => update(count - 1)}>
          -
        </button>
        <span class="large value"> {count} </span>
        <button class="large btn" onclick={() => update(count + 1)}>
          +
        </button>
      </div>,
      element
    );
  });
```

```html
<my-counter></my-counter>
```
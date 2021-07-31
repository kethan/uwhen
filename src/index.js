import { whenAdded } from "when-elements";
import { hooked, hasEffect, dropEffect } from "uhooks";

const when = (selector, callback) => {
	whenAdded(selector, (element) => {
		const kids = [...element.childNodes];
		const props = {};
		for (const attr of element.attributes) {
			props[[attr.name]] = attr.value;
		}
		const hook = hooked(callback);
		hook(element, props, kids);
		return () => {
			if (hasEffect(hook)) {
				dropEffect(hook);
			}
		};
	});
};

export { when };

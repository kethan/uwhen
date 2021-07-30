import { whenAdded } from "when-elements";
import { hooked, hasEffect, dropEffect } from "uhooks";

export default function (selector, callback) {
	whenAdded(selector, (element) => {
		const kids = [...element.childNodes];
		const props = {};
		for (const attr of element.attributes) {
			props[[attr.name]] = attr.value;
		}
		const hook = hooked(() => callback(element, props, kids));
		hook();
		return () => {
			if (hasEffect(hook)) {
				dropEffect(hook);
			}
		};
	});
};

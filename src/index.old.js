import { whenAdded } from "when-elements";
import { createPragma } from 'jsx2tag';
import { hooked, hasEffect, dropEffect, } from "uhooks";
import { html } from 'uhtml';

const get = (child, name) => child.getAttribute(name);
const queryHelper = (attr, arr) => (element) =>
	[].reduce.call(
		element.querySelectorAll("[" + attr + "]"),
		(slot, node) => {
			let { parentNode } = node;
			do {
				if (parentNode === element) {
					const name = get(node, attr);
					slot[name] = arr ? [].concat(slot[name] || [], node) : node;
					break;
				} else if (
					/-/.test(parentNode.tagName) ||
					get(parentNode, "is")
				)
					break;
			} while ((parentNode = parentNode.parentNode));
			return slot;
		},
		{}
	);

const slot = queryHelper("slot", true);

const when = (selector, callback) => {
	whenAdded(selector, (element) => {
		const slots = slot(element);
		const props = {};
		for (const attr of element.attributes) {
			props[[attr.name]] = attr.value;
		}
		const hook = hooked(callback);
		hook(element, props, slots);
		return () => {
			if (hasEffect(hook)) {
				dropEffect(hook);
			}
		};
	});
};

export { html, render, svg } from 'uhtml';
const h = createPragma(html);
export { when, h };
export {
	createContext, useContext,
	useCallback, useMemo,
	useEffect, useLayoutEffect,
	useReducer, useState,
	useRef
} from 'uhooks';

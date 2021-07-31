import { whenAdded } from "when-elements";
import { hooked, hasEffect, dropEffect } from "uhooks";

const when = (selector, callback) => {
	whenAdded(selector, (element) => {
		const props = {};
		for (const attr of element.attributes) {
			props[[attr.name]] = attr.value;
		}
		const hook = hooked(callback);
		hook(element, props);
		return () => {
			if (hasEffect(hook)) {
				dropEffect(hook);
			}
		};
	});
};

export { when };

export {
	createContext, useContext,
	useCallback, useMemo,
	useEffect, useLayoutEffect,
	useReducer, useState,
	useRef
} from 'uhooks';

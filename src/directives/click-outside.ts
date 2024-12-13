import {DirectiveBinding, ObjectDirective} from 'vue';

type HTMLElementWithClickOutside = HTMLElement & {
    clickOutsideEvent?: (event: MouseEvent) => void;
};

const clickOutsideDirective: ObjectDirective<HTMLElementWithClickOutside, (event: MouseEvent) => void> = {
    beforeMount(el: HTMLElementWithClickOutside, binding: DirectiveBinding<(event: MouseEvent) => void>) {
        el.clickOutsideEvent = function (event: MouseEvent) {
            if (!(el === event.target || el.contains(event.target as Node))) {
                binding.value(event);
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el: HTMLElementWithClickOutside) {
        if (el.clickOutsideEvent) {
            document.removeEventListener('click', el.clickOutsideEvent);
        }
    },
};

export default clickOutsideDirective;

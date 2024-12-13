import { Directive, DirectiveBinding } from 'vue';

interface ScrollLockHTMLElement extends HTMLElement {
  _lockScroll?: () => void;
}

const ScrollLockDirective: Directive<ScrollLockHTMLElement, boolean> = {
  mounted(el: ScrollLockHTMLElement, binding: DirectiveBinding<boolean>) {
    const body = document.body;

    const lockScroll = () => {
      if (binding.value) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    };

    el._lockScroll = lockScroll;

    lockScroll();
  },
  updated(el: ScrollLockHTMLElement) {
    if (el._lockScroll) {
      el._lockScroll();
    }
  },
  unmounted(el: ScrollLockHTMLElement) {
    document.body.style.overflow = '';
    delete el._lockScroll;
  },
};

export default ScrollLockDirective;

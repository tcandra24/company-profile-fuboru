import { useAppStore } from "@/stores/index";

export default {
  init() {
    const store = useAppStore();

    // set default styles
    let val = localStorage.getItem("theme"); // light, dark
    val = val || "light";
    store.toggleTheme(val);

    val = localStorage.getItem("direction"); // rtl, ltr
    val = val || "ltr";
    store.toggleDirection(val);
  },
};

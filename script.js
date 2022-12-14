import CreateAmogus from "./components/index.js";

if (!customElements.get("ag-create")) {
    customElements.define("ag-create", CreateAmogus);
}
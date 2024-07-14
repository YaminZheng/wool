import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno({ important: "body" }),
    presetAttributify({ prefix: "uno-", prefixedOnly: true }),
  ],
  rules: [[/^flex-(\d+)$/, ([, d]) => ({ flex: `${d} ${d} 0%` })]],
  shortcuts: [
    [/^(.*)-base$/, ([, c]) => `${c}`, { layer: "layer-base" }],
    [/^(.*)-reset$/, ([, c]) => `${c}`, { layer: "layer-reset" }],
    ["table", ""],
  ],
  layers: { "layer-base": -2, "layer-reset": 3 },
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-prefix-selector")({
      prefix: ".thelia-blocks-ui",
      ignoreFiles: [
        "tippy.js/dist/tippy.css",
        "tippy.js/themes/light.css",
        "BlockTooltip.css",
        "medium-editor/dist/css/medium-editor.css",
        "medium-editor/dist/css/themes/beagle.css",
      ],
    }),
  ],
};

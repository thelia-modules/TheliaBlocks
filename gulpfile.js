const { src, dest, watch, parallel } = require("gulp");

function copy() {
  return src("node_modules/@thelia/blocks-editor/dist/*").pipe(
    dest("templates/backOffice/default/vendor/")
  );
}

// The editor bundle is built with React as an external global, so the back office has to
// serve React itself. Shipping the UMD builds with the module keeps the back office free of
// any runtime dependency on a public CDN.
function copyReact() {
  return src([
    "node_modules/react/umd/react.production.min.js",
    "node_modules/react-dom/umd/react-dom.production.min.js",
  ]).pipe(dest("templates/backOffice/default/vendor/react/"));
}

const build = parallel(copy, copyReact);

function defaultTask() {
  if (process.env.NODE_ENV === "production") {
    return build();
  } else {
    watch(["node_modules/@thelia/blocks-editor/dist/*"], copy);
    return watch(
      [
        "node_modules/react/umd/react.production.min.js",
        "node_modules/react-dom/umd/react-dom.production.min.js",
      ],
      copyReact
    );
  }
}

exports.default = defaultTask;

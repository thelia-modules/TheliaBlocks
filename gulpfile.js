const { src, dest, watch } = require("gulp");

function copy() {
  return src("node_modules/@thelia/blocks-editor/dist/*").pipe(
    dest("templates/backOffice/default/vendor/")
  );
}

function defaultTask() {
  if (process.env.NODE_ENV === "production") {
    return copy();
  } else {
    watch(["node_modules/@thelia/blocks-editor/dist/*"], copy);
  }
}

exports.default = defaultTask;

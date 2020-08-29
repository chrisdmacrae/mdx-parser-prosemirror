var acornLoose = require("acorn-loose");

const res = acornLoose.parse(`
  import { XComponent } from "./x";
  import { YComponent } from "./y";

  ## Heading

  <XComponent />
  <YComponent />

  Paragraph
`, {ecmaVersion: 2020});

console.log(res);
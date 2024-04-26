import lume from "lume/mod.ts";
import nav from "lume/plugins/nav.ts";

const site = lume({
    src: "./files",
    dest: "./_site",
  }
);

site.use(nav());

export default site;

import lume from "lume/mod.ts";
import nav from "lume/plugins/nav.ts";

const site = lume({
    src: "./files",
    dest: "./_site",
  }
);

// access to file tree
site.use(nav());
// copy and host fonts
site.copy("_includes/fonts");

export default site;

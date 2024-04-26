import lume from "lume/mod.ts";
import nav from "lume/plugins/nav.ts";
import lightningCss, { version } from "lume/plugins/lightningcss.ts";

const site = lume({
    src: "./files",
    dest: "./_site",
  }
);

site.use(lightningCss());

// access to file tree
site.use(nav());
// copy and host fonts
site.copy("_includes/fonts");

export default site;

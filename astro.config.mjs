import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        mdi: ["check", "close", "github", "menu"],
        "fa6-solid": ["gauge"],
        "heroicons-outline": ["support"],
      },
    }),
  ],
});

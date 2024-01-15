import { defineConfig } from 'astro/config';
import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";
// import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
const tina = ({
  directiveName = 'tina'
} = {}) => ({
  name: 'tina-cms',
  hooks: {
    'astro:config:setup': ({
      addClientDirective,
      opts
    }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: './client-directives/tina.mjs'
      });
    }
  }
});
const whenExternalScripts = (items = []) => ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];


// https://astro.build/config
export default defineConfig({
  site: "https://www.cliqbait.in",
  integrations: [robotsTxt(), sitemap(), tailwind(), react(), tina(), partytown({
    config: { forward: ['dataLayer.push'], debug: false },
  })],
  image: {
    remotePatterns: [{
      protocol: "https"
    }],
    domains: ["assets.tina.io"]
  }
});
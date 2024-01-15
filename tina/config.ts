import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "/src/assets",
      publicFolder: "",
    },
  },


  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Hero Section",
        name: "hero_section",
        path: "content/hero",
        format: "json",
        ui: {
          router: (props) => {
            return "/"
          },
          // allowedActions: {
          //   create: false,
          //   delete: false,
          // },

        },
        fields: [
          {
            label: "Image 1",
            name: "hero_img_1",
            type: 'image',
            required: true,

          },
          {
            label: "Image 2",
            name: "hero_img_2",
            type: 'image',
            required: true,

          },
          {
            label: "Image 3",
            name: "hero_img_3",
            type: 'image',
            required: true,
          },
          {
            label: "Image 4",
            name: "hero_img_4",
            type: 'image',
            required: true,
          },
          {
            label: "Image 5",
            name: "hero_img_5",
            type: 'image',
            required: true,
          },
          {
            label: "Image 6",
            name: "hero_img_6",
            type: 'image',
            required: true,
          },
          {
            label: "Image 7",
            name: "hero_img_7",
            type: 'image',
            required: true,
          },
          {
            label: "Image 8",
            name: "hero_img_8",
            type: 'image',
            required: true,
          },
          {
            label: "Image 9",
            name: "hero_img_9",
            type: 'image',
            required: true,
          },
          {
            label: "Image 10",
            name: "hero_img_10",
            type: 'image',
            required: true,
          },
        ],
      },
      {
        label: "Clients Logo Section",
        name: "clients_logo_section",
        path: "content/clients",
        format: "json",
        ui: {
          router: (props) => {
            return "/"
          },
          // allowedActions: {
          //   create: false,
          //   delete: false,
          // },

        },
        fields: [
          {
            label: "Client 1",
            name: "client_img_1",
            type: 'image',
            required: true,

          },
          {
            label: "Image 2",
            name: "client_img_2",
            type: 'image',
            required: true,

          },
          {
            label: "Image 3",
            name: "client_img_3",
            type: 'image',
            required: true,
          },
          {
            label: "Image 4",
            name: "client_img_4",
            type: 'image',
            required: true,
          },
          {
            label: "Image 5",
            name: "client_img_5",
            type: 'image',
            required: true,
          },
          {
            label: "Image 6",
            name: "client_img_6",
            type: 'image',
            required: true,
          },
          {
            label: "Image 7",
            name: "client_img_7",
            type: 'image',
            required: true,
          },

        ],
      },
    ]
  }
})

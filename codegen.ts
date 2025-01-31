import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql/schema_cruddals/schema.gql",
  // documents: ['src/**/*.vue'],
  // ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "graphql/types/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;

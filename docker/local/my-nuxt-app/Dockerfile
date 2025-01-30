ARG NODE_VERSION=20.18.0

FROM node:${NODE_VERSION}-slim AS base

ENV NODE_ENV=development

WORKDIR /src

RUN apt-get update -y && \
    apt-get install less git -y && \
    # --- Clean ---
    apt-get clean -y && \
    rm -rf /var/cache/apk/* && \
    rm -rf /var/lib/apt/lists/*


RUN npx -y playwright@1.50.0 install --with-deps

# Build
FROM base AS build

COPY --link package.json yarn.lock ./
RUN yarn

# Run
FROM base

COPY --from=build /src/node_modules /src/node_modules

CMD [ "npm", "run", "dev" ]
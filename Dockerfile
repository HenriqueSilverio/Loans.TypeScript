#
# Stage 1: build
#
FROM node:20.13.1-alpine@sha256:291e84d956f1aff38454bbd3da38941461ad569a185c20aa289f71f37ea08e23 AS build

USER node

ARG CI=true

WORKDIR /home/node

COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

#
# Stage 2: clean
#
FROM node:20.13.1-alpine@sha256:291e84d956f1aff38454bbd3da38941461ad569a185c20aa289f71f37ea08e23 AS clean

USER node

ARG CI=true

WORKDIR /home/node

COPY --chown=node:node ["package.json", "package-lock.json", "./"]

RUN npm ci --only=production

#
# Stage 3: production
#
FROM node:20.13.1-alpine@sha256:291e84d956f1aff38454bbd3da38941461ad569a185c20aa289f71f37ea08e23

ARG USERNAME=nonroot
ARG USERHOME=/home/${USERNAME}

ENV NODE_ENV=production
ENV SERVICE_NAME="Loans App"

RUN deluser --remove-home node && \
  addgroup \
    --gid 1000 \
    ${USERNAME} \
  && \
  adduser \
    --disabled-password \
    --home ${USERHOME} \
    --ingroup ${USERNAME} \
    --uid 1000 \
    ${USERNAME}

RUN apk update && apk add --no-cache tini

COPY --from=build --chown=${USERNAME}:${USERNAME} /home/node/dist ${USERHOME}/src

COPY --from=clean --chown=${USERNAME}:${USERNAME} /home/node/node_modules ${USERHOME}/node_modules

WORKDIR ${USERHOME}

USER ${USERNAME}

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "src/index"]

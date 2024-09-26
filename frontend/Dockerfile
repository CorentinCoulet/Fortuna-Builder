FROM node:18 AS build

WORKDIR /usr/src/app

# Let's use a docker-entrypoint, it's easier, cleaner and more flexible than dodgy dockerfile hacks
COPY docker-entrypoint.sh /usr/src/app/
RUN chmod +x /usr/src/app/docker-entrypoint.sh && \
    chown node:node /usr/src/app/docker-entrypoint.sh

# TODO: Manage the exposed port depending on the deployment environment DEV/PROD
EXPOSE 5173

ENTRYPOINT ["./docker-entrypoint.sh"]
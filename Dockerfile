#
# ---- Base Node ----
FROM node as base
# install node
ENV DIR /opt/applications
RUN mkdir -p $DIR
WORKDIR $DIR
COPY package.json .
RUN npm install
#
# ---- Dependencies ----
FROM node
ENV DIR /opt/applications
RUN mkdir -p $DIR
WORKDIR $DIR
COPY --from=base /opt/applications/node_modules ./node_modules
COPY . $DIR
RUN npm install -g gulp
EXPOSE 8000
CMD ["gulp","default"]
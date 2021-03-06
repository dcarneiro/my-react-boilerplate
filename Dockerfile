FROM node:7.3.0

ENV KARMA_BROWSER PhantomJS
ENV API_URL http://api-url.com

RUN apt-get update \
 && apt-get install libpng12-0

WORKDIR /reactapp

ADD package.json package.json
RUN npm install
ADD . .

VOLUME /reactapp

EXPOSE 3000

CMD ["npm", "run", "start:production"]

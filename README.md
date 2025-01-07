npx create-expo-app sqlapp
npx expo expo-sqlite
npm i -D drizzle-kit
npm i drizzle-orm babel-plugin-inline-import
npm i expo-drizzle-studio-plugin

npx expo-customize metro.config.js
npx expo customize babel.config.js

Add this in metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const config = getDefaultConfig(\_\_dirname);
config.resolver.sourceExts.push("sql");
module.exports = config;

Add this in babel.config.js
module.exports = function (api) {
api.cache(true);
return {
presets: ["babel-preset-expo"],
plugin: [["inline-import", { extension: [".sql"] }]],
};
};

after this create drizzle.config.ts
and add drizzle config

after this add db folder and add schema.ts file
and add tables schema

after that run this command to generate migrations
npx drizzle-kit generate

Add configurations to \_layout file to connnect to db
and use db to fetch data in index route

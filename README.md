## Serve

You can serve both projects

```sh
yarn start
```

Which does

```sh
concurrently "ng run frontend:serve" "ng run backend:serve"
```

## Build

You can build projects using

```sh
ng run frontend:build
ng run backend:build
```

It uses @Toxicable's builder.

### Build Affected

You can build affected apps

```sh
yarn affected:build --files=libs/schema/src/index.ts
```

Both the frontend and backend build when the schema is changed because both apps depend on the schema

## Test

You can test node apps using jest

jest --projects apps/backend/jest.config.js

## Schemas

You can see schemas used as a lib

![image](https://user-images.githubusercontent.com/8104246/42402074-a9f8f7fe-8146-11e8-897b-1c4b1c0dd771.png)
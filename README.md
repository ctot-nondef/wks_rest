# Vienna Center for the History of Collecting Project DB

Custom middleware for a mongodb based on [expressjs](https://github.com/expressjs/express/) and [mongoose](https://github.com/Automattic/mongoose/) exposing a schema driven rest interface.
Integrates an upload endpoint for imagery and PDF documents as well as authentication and rights management.


## Installation
``` bash
# install dependencies
npm install

#run dev mode (based on nodemon)
node dev.js

#run production
node server.js
```

## Schema Setup
Schemas are defined as [json-schema](http://json-schema.org/) files in the folder \\schemas.

## Authentication / User Management
tbd

## Asset Management
tbd

## Import Scripts

* import_01.js - users, actors, descriptors, authrecs
* import_02.js - collections, history
* import_03.js - inventories, history
* import_04.js - entries, assets
* import_05.js - objects, assets

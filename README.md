# A Boilerplate Webpack Build Process ⏹📲
[Webpack](https://webpack.github.io/docs/) is a module loader and build tool for javascript applications.

Webpack is powerful but can seem complex. Each process is handled by a plugin in the config file. To unfamiliar eyes, this configuration can seem daunting. That's why I've created and commented this boilerplate to get you started! 🙌

## Development Setup

From the root directory, where `package.json` is located, run the following commands:

    # Confirm npm is installed. If not, install Node from nodejs.org
    $ npm -v

    # Update npm
    $ npm install -g npm

    # Install project dependencies
    $ npm install

    # Start webpack-dev-server on localhost with live compiling
    $ npm start

#### Notes on Dev:
- Files are in ./src
- webpack-dev-server compiles __in memory__ and does not save to disk
- Sourcemaps available under DevTools > Source Panel > webpack://.src/js/**

## Production Build
TODO

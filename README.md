# rollup-react-example
[![Build Status](https://travis-ci.org/camille-hdl/rollup-react-example.svg?branch=master)](https://travis-ci.org/camille-hdl/rollup-react-example) 

Example dev environment for React using [Rollup](https://rollupjs.org) with code splitting, ES modules, Service Workers, Babel and Flow.  
This repository completes a step-by-step guide on Medium (TODO: link) on how to setup Rollup for JavaScript development.

Sample configuration files for Travis CI and Netlify are provided.


## Commands

* `npm install`
* `npm run workbox` creates Service Workers
* `npm run build` creates a production build and Service Workers
* `npm run watch` starts the dev loop
* `npm run serve` starts a HTTP server, then browse to [http://localhost:5000](http://localhost:5000)
* `npm run jest` runs unit tests
* `npm run cypress:open` opens Cypress GUI
* `npm test` runs unit tests, then builds, then launches a dev server on port 5000, then runs end-to-end tests

## License

see [LICENSE](LICENSE)


[@camille_hdl](https://twitter.com/camille_hdl)

<p align="center">
  <img alt="Dolaretxe Logo" src="./readme/logo.png" width="300px"></img>
  <h3 align="center"><b>Dolaretxe</b></h3>
  <p align="center">Source files of https://www.dolaretxe.es</p>
</p>

<p align="center">
    <a href="https://github.com/zerjioang/dolaretxe.es/actions">
      <img alt="Build Status" src="https://github.com/zerjioang/dolaretxe.es/workflows/CI/badge.svg">
    </a>
</p>

This repository contains source files of https://dolaretxe.es website.

## Requirements

* NodeJS
* VueJS

## Development

### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```

#### Run your tests
```
yarn run test
```

#### Lints and fixes files
```
yarn run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### How many times can the website be automatically updated?

It will depend on current Github pricing and actions minutes. Pricings are available at https://github.com/pricing but with free version you get:

* Unlimited repositories
* 3 collaborators/private repository
* 2,000 Action minutes/month
* 500MB of GitHub Packages storage
* Automated security updates

Suppose each build takes to compute and deploy 10 mins. Since free plan only has 2000 minutes, we can make up to 2000/10 = **200 builds** and deployments on a single month. The instructions to make an automatic deployment are:

1. create a new branch for your changes
2. make your changes
3. push your changes
4. merge your changes with master

**Github actions** will trigger automatic build and deployment every time you **push** something to `master`

## License

El presente contenido web es propiedad de ESCUELA INFANTIL DOLARETXE (PRIMERAN, S.L.)
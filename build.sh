#!/bin/bash

echo "compiling current version"
if [[ ! -d node_modules ]]; then
	yarn install
fi
rm -rf dist
yarn build
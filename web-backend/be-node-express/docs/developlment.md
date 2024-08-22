# 1. Overview

# 1.1.

In a first iteration, we will create a simple TS webserver providing a list of blog articles.
I will also use /docs folder to create a documentation for the project.

# 1.2. Stack

1.2.1. I will try an ESBUILD as a (hopefully) faster alternative to TSC
1.2.2. Installing type

Used resources:
https://expressjs.com
https://www.totaltypescript.com/build-a-node-app-with-typescript-and-esbuild

////

# 2. Guide

Into the packate.json, we add
"type": "module"
To use ES modules instead of commonjs.

# 2.1 Installation

pnpm init -y
pnpm install express esbuild
pnpm install --save-dev @types/node @types/express

# build.js

ESBUILD needs build.js file in the root.

# common vs modules

While TS code is written with modules, the

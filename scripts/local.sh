#!/usr/bin/env bash

set -euo pipefail

# Need to build for typeorm models
npm run build &&  npm run serve
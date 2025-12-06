#!/bin/bash

set -e
set -o pipefail

thisScriptFile=$(readlink -f "${BASH_SOURCE[0]:-$0}")
thisScriptDirectory=$(dirname "${thisScriptFile}")

rm -rf docs/.anemos
anemos declarations docs/.anemos

cd "${thisScriptDirectory}/docs-code/js"
anemos package install
anemos build --verbose index.js
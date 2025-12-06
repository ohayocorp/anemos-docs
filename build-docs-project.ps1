$thisScriptDirectory=$PSScriptRoot

# Remove all type definitions recursively if they exist
if (Test-Path -Path docs\.anemos) {
    Remove-Item -Path docs\.anemos -Recurse -Force
}

anemos.exe declarations docs\.anemos

Push-Location "${thisScriptDirectory}\docs-code\js"

try {
    anemos.exe package install
    if ($LastExitCode -ne 0) {
        exit $LastExitCode
    }

    anemos.exe build --verbose index.js
    if ($LastExitCode -ne 0) {
        exit $LastExitCode
    }
} finally {
    Pop-Location
}
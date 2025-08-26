# Claude Flow wrapper script for PowerShell

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

if (Test-Path "$scriptPath\package.json") {
    # Local development mode
    if (Test-Path "$scriptPath\src\cli\simple-cli.js") {
        & node "$scriptPath\src\cli\simple-cli.js" $args
    } elseif (Test-Path "$scriptPath\dist\cli.js") {
        & node "$scriptPath\dist\cli.js" $args
    } else {
        Write-Error "Could not find Claude Flow CLI files"
        exit 1
    }
} else {
    # Production mode - use npx alpha
    & npx claude-flow@alpha $args
}
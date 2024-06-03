# Run the build command
& 'ng' 'build' '--output-path' '../docs' '--base-href' 'https://marcovandehaar.github.io/deaap/'

# Copy the contents of ../docs/browser to ../docs
Get-ChildItem -Path '../docs/browser' | Move-Item -Destination '../docs' -Force
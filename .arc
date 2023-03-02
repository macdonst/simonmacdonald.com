@app
simonmacdonald-com

@static
prune true

@plugins
architect/plugin-lambda-invoker
enhance/arc-plugin-enhance
enhance/arc-image-plugin

@bundles
wc-social-link './node_modules/@vanillawc/wc-social-link/src/wc-social-link.js'

@begin
region us-west-2

@events
send-email
  src jobs/events/send-email

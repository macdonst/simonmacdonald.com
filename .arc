@app
simonmacdonald-com

@static
prune true

@plugins
architect/plugin-lambda-invoker
enhance/arc-plugin-enhance
enhance/arc-plugin-styles
enhance/arc-image-plugin
enhance/arc-plugin-posse
create-post-metadata
create-rss-feed
enhance/arc-plugin-block-bots

@enhance-styles
config styleguide.json

@posse
feed "https://simonmacdonald.com/blog/rss"
rate "1 hour"
since "2023-09-24"

@begin
region us-west-2

@aws
runtime nodejs22.x

@events
send-email
  src jobs/events/send-email

@tables
talks
  id *String
  date **String

@http
/og-img/:title
  method get
  src og-img

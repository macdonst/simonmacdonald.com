@app
simonmacdonald-com

@static
prune true

@plugins
architect/plugin-lambda-invoker
enhance/arc-plugin-enhance
enhance/arc-image-plugin
create-post-metadata
create-rss-feed

@enhance-styles
config styleguide.json

@begin
region us-west-2

@aws
runtime nodejs18.x

@events
send-email
  src jobs/events/send-email

@tables
talks
  id *String
  date **String

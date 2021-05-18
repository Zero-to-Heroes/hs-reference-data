# Copy the files to S3

```
aws s3 cp ./src/lib/cards.json s3://static.zerotoheroes.com/hearthstone/jsoncards/ --acl public-read
aws s3 cp ./src/lib/hs-achievements.json s3://static.zerotoheroes.com/hearthstone/jsoncards/ --acl public-read
aws s3 cp ./src/lib/card-backs.json s3://static.zerotoheroes.com/hearthstone/data/ --acl public-read
aws s3 cp ./src/lib/deck-templates.json s3://static.zerotoheroes.com/hearthstone/data/ --acl public-read
```

Generate the card back data from the Blizzard API, eg

# Dev stuff

rm -rf dist && tsc && rm -rf dist/node_modules && npm publish --access public

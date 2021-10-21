# Copy the files to S3

```
aws s3 cp ./src/cards.json s3://static.zerotoheroes.com/hearthstone/jsoncards/ --acl public-read
aws s3 cp ./src/hs-achievements.json s3://static.zerotoheroes.com/hearthstone/jsoncards/ --acl public-read
aws s3 cp ./src/card-backs.json s3://static.zerotoheroes.com/hearthstone/data/ --acl public-read
aws s3 cp ./src/deck-templates.json s3://static.zerotoheroes.com/hearthstone/data/ --acl public-read

```

Generate the card back data from the Blizzard API, eg

# Dev stuff

rm -rf dist && tsc && rm -rf dist/node_modules && npm publish --access public

rm -rf dist && tsc && rm -rf dist/node_modules && 'cp' -rf dist/ /e/Source/zerotoheroes/firestone/core/node_modules/\@firestone-hs/reference-data/

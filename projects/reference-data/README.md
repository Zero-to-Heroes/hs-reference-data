# Copy the files to S3

```
aws s3 cp ./projects/reference-data/src/lib/cards.json s3://static.zerotoheroes.com/hearthstone/jsoncards/ --acl public-read
aws s3 cp ./projects/reference-data/src/lib/hs-achievements.json s3://static.zerotoheroes.com/hearthstone/jsoncards/ --acl public-read
aws s3 cp ./projects/reference-data/src/lib/card-backs.json s3://static.zerotoheroes.com/hearthstone/data/ --acl public-read
aws s3 cp ./projects/reference-data/src/lib/deck-templates.json s3://static.zerotoheroes.com/hearthstone/data/ --acl public-read
```

Generate the card back data from the Blizzard API, eg

# Dev stuff

rm -rf dist/reference-data/ && ng build reference-data && npm publish dist/reference-data/ --access public

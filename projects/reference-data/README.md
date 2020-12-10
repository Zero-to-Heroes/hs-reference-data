# Copy the files to S3

```
aws s3 cp ./projects/reference-data/src/lib/cards.json s3://static.zerotoheroes.com/hearthstone/jsoncards/ --acl public-read
aws s3 cp ./projects/reference-data/src/lib/hs-achievements.json s3://static.zerotoheroes.com/hearthstone/jsoncards/ --acl public-read
```

# Dev stuff

rm -rf dist/reference-data/ && ng build reference-data && npm publish dist/reference-data/ --access public

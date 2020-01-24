## Deploy

In order to deploy the endpoint, simply run:

```bash
serverless deploy
```

## Test

Use multiform/data upload with image attribute.

curl --location --request POST 'https://ddvvkx2qfl.execute-api.us-east-1.amazonaws.com/dev/upload' \
--header 'Content-Type: multipart/form-data; boundary=--------------------------653284254766201981580443' \
--form 'image=@/Users/rub/Downloads/msg-1-fc-40.jpg'

Postman Example


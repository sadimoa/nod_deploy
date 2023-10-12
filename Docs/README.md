# Api Documentation for Bookstore

this project we'll build a backend application for Bookstore 

## Base URL

the base url of all the endpoints is:https://node-deploy-90mu.onrender.com/api

## Authentication

All authenticated endpoints require a valid JSON Web Token (JWT) in the Authorization header.

Example header:

Authorization: Bearer <token>
To obtain a token, use the login/signup endpoints.

Note: Replace <token> with the actual JWT token obtained during authentication.

## Endpoints

##### Signup

- URL: **`/owner/signup`**
- Method: **`POST`**
- Description: signup a new owner.
- Request Body:

| Field    | Type   | Description                |
| -------- | ------ | -------------------------- |
| name     | String | name of the owner          |
| email    | String | Email address of the owner |
| password | String | Password for the owner     |

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json
{
  "message": "Owner created successfully",
  "token": "<token>"
}
```

##### Owner Login

- URL: /owner/login
- Method: POST
- Description: Authenticates a owner.
- Request Body:

| Field    | Type   | Description                |
| -------- | ------ | -------------------------- |
| email    | String | Email address of the owner |
| password | String | Password of the owner      |

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json
{
  "message": "owner logged in successfully"
  "token": "<token>"
}
```

#### Request Headers
Include the JWT token in the 'Authorization' header of the request.

Example:

Authorization: Bearer <your-jwt-token>



#### Create a new bookstore

- URL: **`/bookstore`**
- Method: **`POST`**
- Description: Creates a new bookstore.
- Authentication: Required
- Request Body:

|Field	|Type	|Description
|-------|-----|-----------
|title	|String	|Title of the bookstore
|name	|String	|name of the bookstore
|date	|String	|Date of the bookstore
|location	|String	|Location of the bookstore

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": "bookstore created successfully",
  "bookstore": new bookstore
}
```

#### Get all the bookstore

- URL: **`/bookstore`**
- Method: **`GET`**
- Description: Get all the bookstore.
- Authentication: Required
- Request Body:


#### Response:

```json 
  [
  {
    "id": <bookstore_id>,
    "ownerId": Number,
    "name": String,
    "loaction": String,
    "date": String,
  },
]
```


#### Get the bookstore by id

- URL: **`/bookstore/id`**
- Method: **`GET`**
- Description: Get the bookstore by id.
- Authentication: Required
- Request Body:


#### Response:

```json 
  {
    "id": <bookstore_id>,
    "ownerId": Number,
    "name": String,
    "loaction": String,
    "date": String,
  },
```

#### Update the bookstore

- URL: **`/bookstore/id`**
- Method: **`PUT`**
- Description: Update the bookstore.
- Authentication: Required
- Request URL Parameters:

|Field	|Type	|Description
|-------|-----|-----------
|title	|String	|Title of the bookstore
|name	|String	|name of the bookstore
|date	|String	|Date of the bookstore
|location	|String	|Location of the bookstore

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": "bookstore Updated successfully",
  "bookstore":  Updated bookstore
}
```

#### Delete the bookstore

- URL: **`/bookstore/id`**
- Method: **`DELETE`**
- Description: delete the bookstore.
- Authentication: Required
- Request URL Parameters:

|Parameter	|Description
|-------|-----|
|id	|id of the bookstore you want delete

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": "bookstore deleted successfully"
}
```



<!-- author -->

#### Create a new author

- URL: **`/author`**
- Method: **`POST`**
- Description: Creates a new author.
- Request Body:

|Field	|Type	|Description
|-------|-----|-----------
|name	|String	|name of the author

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": "author created successfully",
  "bookstore": new author
}
```

#### Get all authors 

- URL: **`/bookstore`**
- Method: **`GET`**
- Description: Get all the authors.

#### Response:

```json 
  {
    "id": <authors_id>,
    "name": String,
    "date": String,
  },
```


#### Update the authors

- URL: **`/author/id`**
- Method: **`PUT`**
- Description: Update the author.
- Authentication: Required
- Request URL Parameters:

|Field	|Type	|Description
|-------|-----|-----------
|name	|String	|name of the author

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": " author Updated successfully",
  "bookstore":  Updated author
}
```

#### delete the author

- URL: **`/author/id`**
- Method: **`DELETE`**
- Description: delete the author.
- Authentication: Required
- Request URL Parameters:

|Parameter	|Description
|-------|-----|
|id	|id of the author you want delete

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": "author deleted successfully",
}
```


<!-- ------------------------->
#### Create a new book

- URL: **`/book`**
- Method: **`POST`**
- Description: Creates a new book.
- Authentication: Required
- Request Body:

|Field	|Type	|Description
|-------|-----|-----------
|authorId	|number	|id of the author
|bookstoreId	|number	|id of the bookstore
|title	|String	|title of the book
|price	|float	|price  of the book
|image	|String	|image  of the book



- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": "book created successfully",
  "bookstore": new book
}
```

#### Get all the book

- URL: **`/book`**
- Method: **`GET`**
- Description: Get all the book.
- Authentication: Required
- Request Body:


#### Response:

```json 
  [
  {
    "id": <bookstore_id>,
    "author": Number,
    "bookstoreId": Number,
    "title": String,
    "price": Number,
    "image": String,
  },
]
```


#### Get the book by id

- URL: **`/book/id`**
- Method: **`GET`**
- Description: Get the book by id.
- Authentication: Required
- Request Body:


#### Response:

```json 
  {
    "id": <book_id>,
    "authorId": Number,
    "bookstoreId": Number,
    "title": String,
    "price": Number,
    "image": String,
  },
```

#### Update the book

- URL: **`/book/id`**
- Method: **`PUT`**
- Description: Update the book.
- Authentication: Required
- Request URL Parameters:

|Field	|Type	|Description
|-------|-----|-----------
|authorId	|number	|id of the author
|bookstoreId	|number	|id of the bookstore
|title	|String	|title of the book
|price	|float	|price  of the book
|image	|String	|image  of the book


- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": "book Updated successfully",
  "bookstore":  Updated bookstore
}
```

#### Delete the book

- URL: **`/book/id`**
- Method: **`DELETE`**
- Description: delete the book.
- Authentication: Required
- Request URL Parameters:

|Parameter	|Description
|-------|-----|
|id	|id of the book you want delete

- Response:
  - Status: 200 OK
  - Content-Type: application/json
  - Body:

```json 
{
  "message": "book deleted successfully"
}
```


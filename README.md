# supero-backend-challenge
RESTful API built with Nodejs, Express, TypeScript, PostgreSQL...

**Live at: https://supero-book-api.herokuapp.com/**

## Requirements
```
Docker
Node
Yarn (recommended)
```

## Docker setup
```
docker run -t -d -p 5432:5432 postgres:10-alpine
```

## Install dependencies
```
yarn install
```

## Usage
To run the development server:
```
yarn run dev
```

## API-DOCS:<br>

### **GET /books**

Parameters:
- page: string
- searchTerm: string
- initialDate: string (year between 1500 and current year)
- endDate: string (year between 1500 and current year)

**EXAMPLE: https://supero-book-api.herokuapp.com/books?page=0&searchTerm=George&initialDate=1600&endDate=2019**
will search for any book with title/author/ISBN containing George and year between 1600 and 2019.

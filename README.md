<p style="display:flex; justify-content: end;">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="30" alt="Nest Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="30" alt="Postgresql Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/225px-GraphQL_Logo.svg.png" width="30" alt="Postgresql Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="https://avatars.githubusercontent.com/u/20165699?s=200&v=4" width="40" alt="Postgresql Logo" /></a>
</p>

## Description

NestJs server with postgres database, which provides Graphql API.

## Graphql API

### Demo app with documentation - [Demo](https://guarded-springs-48275.herokuapp.com/graphql)

#### E.g.

```bash
# Get all categories
query {
   categories {
   id
   title
 todos {
     id text isCompleted
   }
 }
}
```

```bash
# Get all todos
query {
  getAllTodos {
    id
    text
    isCompleted
    category {
      id
      title
    }
  }
}
```

```bash
# Create new category
mutation createCategory($createCategory: CreateCategoryInput!){
  createCategory(createCategory: $createCategory){
    title
    id
  }
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

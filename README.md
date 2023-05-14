# cinema-spots
Module 2 final proyect with my pal Belén Sánchez!


# routes
Different routes we´re gonna use

### user routes

| HTTP METHOD  |      URI          | Description                     | JSON |
| :---         |     :---:         |   :---:                         | ---: |
| GET          | /user/find        | render find-user form           |      |
| POST         | /user/find        | handler find-user form          |      |
| GET          | /user             | matching users list             |      |
| GET          | /user/:id         | user details                    |      |
| GET          | /user/:id/edit    | edit user form render           |      |
| POST         | /user/:id/edit    | edit user form handler          |      |
| POST         | /user/:id/delete  | delete user                     |      |

### auth routes

| HTTP METHOD  |      URI          | Description                     | JSON |
| :---         |     :---:         |   :---:                         | ---: |
| GET          | /signUp           | render sign-up form             |      |
| POST         | /signUp           | handler sign-up form            |      |
| GET          | /logIn            | render log-in form              |      |
| POST         | /logIn            | handler log-in form             |      |
| POST         | /logOut           | end of session                  |      |

### movies routes

| HTTP METHOD  |      URI          | Description                            | JSON             |
| :---         |     :---:         |   :---:                                | ---:             |
| GET          | /movie/search     | search movie form render               |                  |
| GET          | /movie/create     | (conditional), create movie form render|                  |
| POST         | /movie/create     | create movie form handler              |                  |
| GET          | /movie            | matching movies list                   |                  |
| GET          | /movie/:id        | Locations map with movie details       |                  |
| GET          | api/movie/        | Movies List                            |:white_check_mark:|
| GET          | api/movie/:id     | Movie details                          |:white_check_mark:|

### lists routes

| HTTP METHOD  |      URI          | Description                     | JSON |
| :---         |     :---:         |   :---:                         | ---: |
| GET          | /list/:id         | users list                      |      |
| GET          | /list/create      | new list form render            |      |
| POST         | /list/create      | new list form handler           |      |
| GET          | /list/:id         | list details (movies)           |      |
| GET          | /list/:id/edit    | edit list (name) form render    |      |
| POST         | /list/:id/edit    | edit list (name)form handler    |      |
| POST         | /list/:id/delete  | delete user                     |      |


***To come(?) Most popular lists routes



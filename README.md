## Trying to build a social media app using MERN

- After failing to build a social media app using MERN earlier(disastrous architecture),here is a new improved version of it

### Some goals with the project

- Make the frontend and backend architecture as clean as possible( the whole ideation document coming soon)
- Adopt better practices(proper API endpoint names,Better Components(adhering to the idea(every component must serve an independent functionality, last time messed up some states and the project had a million window.location.reload() )),Better design system and conventions, organized css etc)

### Features

- Registration and Login of users using their email as well as facebook auth(if everything goes well might add google and github auth as well, who knows :) :) )
- Create, Delete, Edit, Like and Comment on posts, similar functionality for the comments
- Ability to follow users
- Infinite scroll(Hopefully)
- Messaging using sockets(Less priority)
- Search users
- Randomised feed(Less priority)
- Forgot Password

### POSSIBLE BETTER PRACTICES

- There is a bit of prop drilling in image upload modal , can maybe use context

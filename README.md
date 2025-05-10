
Demo app using Next.js

## Getting Started


  This project involves building a small React + Next.js application that fetches data from a public API
  (such as a list of users or posts) and stores frequently accessed data in Redis to enhance performance.
  
  The app demonstrates both server-side rendering (SSR) and client-side rendering (CSR) in different components, 
  and it uses Redis for caching to improve performance. 
  The project is also containerized using Docker for deployment.


## To run the project:

1-Run the following command:
  ```bash
   docker-compose up --build
 ```
2-After that, visit the following URLs:

  Client-side rendering: http://localhost:3000/client-side/users
  
  Server-side rendering: http://localhost:3000/server-side/users

## Timing of response

  I compared the timing of responses before and after implementing caching:
  
  Client-side:
  
    Before caching: ~93ms
    
    After caching: ~9ms
  
  Server-side:
  
    Before caching: ~20ms
    
    After caching: even faster (caching significantly improved the performance).
  
  The server-side rendering performed better than client-side rendering because SSR fetches and processes 
  data on the server before sending the rendered HTML to the client, reducing the time it takes to display content.
  

## Scalable Vision

  To handle thousands or millions of users, I would run multiple copies of the app on different servers so they can share the traffic,
  this is called horizontal scaling. I’d use a load balancer to send users to the right server and make sure the app stays fast and available.


## Conclusion
  This mini-project helped me understand new concepts like Redis caching and Next.js, which I had no prior experience with. It has taught me the importance of performance optimization and has given me the confidence to dive deeper into Next.js for future projects.








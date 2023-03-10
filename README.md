# Load balancer with Nginx

A simple load balancer using Nginx

To launch multiple container, run the command

`docker-compose up --scale api=X`

X : number of containers

A container will return its hostname as a response json.

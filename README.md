# cors-demo

#What is CORS?

Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. 

primary-server(UI) -> primary-server(BACKEND) (same origin))
primary-server(UI) -> remote-server(BACKEND) (cross origin))


#What will be happen if call a remote-server REST API from primary-server?

Browser(User Agent) will restrict cross orgin request for "Browser level security" (But we can access same REST API using another softwares). CORS also prevent sending some http headers(like Authentication Headers).

#How to allow browsers to access remote-server(cross origin)?
We can implement CORS on remote servers and allow access from Browser(UI).

#How can we do it?

Add a CORS middleware on remote-server and bypass API calls by adding configurations.(add primary server's IP address in CORS configuration)

#why adding primary-server's IP in CORS configuration. 

Because UI(Angular) is hosted on primary server.

#will this be a security issue?

Refer: https://stackoverflow.com/questions/12001269/what-are-the-security-risks-of-setting-access-control-allow-origin#:~:text=However to secure against attacks,Control-Allow-Origin header 

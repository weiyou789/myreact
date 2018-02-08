## Features

## Usage

```
# Setup
$ npm install

# Start dev server
$ npm run start

# Start dev server without dashboard (window platform)
$ npm run dev

# Build for production
$ npm run build
```

## Project Structure
```
├── src
│   ├── common
│   ├── components
│   ├── constants
│   ├── features
│   ├── middlewares
│   ├── styles
│   ├── index.html
│   ├── Root.js
│   ├── configStore.js
│   ├── rootReducer.js
│   ├── routes.js
│   └── main.js
├── webpack
│   ├── webpack.config.js
│   ├── webpack.dll.js
│   ├── webpack.plugins.js
│   ├── webpack.rules.js
│   └── webpack.server.js
├── config.js
├── .bablerc
├── .gitignore
└── ...
```

```
#nginx
server {
  listen  80;
  server_name  bd.haiziwang.com;
  location / {
    root /data/web/bigdata;
    index   index.html index.htm;
    try_files $uri $uri/ /index.html =404;
  }
}
```
```
#deploy
scp -r 1.0.0 appadmin@172.172.70.1:/data/web/static/static/bd/
scp index.html appadmin@172.172.200.141:/data/web/bigdata/
```

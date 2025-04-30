# 🚀 Learning Laravel 11 and Inertia and React js

### ✅ Phase 1: Installing

- [✅] installing all needed [laravel,inertia,react]



## 🛠️ Tools I'm Using
- Laravel 11
- Inertia
- react
- tailwind 

---

## 🧠 Notes & Learnings

# Day 1
- command needed
- laravel new "name of app"
- cd name of app
- npm i react react-dom
- npm install --save-dev @vitejs/plugin-react
- code .
- composer require inertiajs/inertia-laravel
- then change the resources/welcome.blade.php into app.blade.php
- go to inertia js installation server-side then copy @vite(resoureces/js/app.js) @inertiaHead @inertia inside in the body tag
- php artisan inertia:middleware
- by following the inertia SSR copy the middleware provided then paste it inside the bootstrap/app.php in the middleware section
- server side is done
- Go in the client side then follow the steps there
- npm install @inertiajs/react
- then copy everything and paste it in the app.js
- then change the app.js into app.jsx
- modify the vite.config.js
- change the file extension there of app.js into app.jsx
- then add the vite plugin that you already install by importing import react from '@vitejs/plugin-react'
- then put the react() in the bottom
- then change also the file extension of app.js in the welcome.blade.php that you've already change into app.jsx then also add in the upper @viteReactRefresh
- then add Pages folder inside the resources/js/Pages
- in the routes change the view into inertia coz view is for blade

- then install tailwind css then go to tailwind css installation then find the framework guid choose laravel then follow all the instruction there
- then go back in the app.jsx then add your tailwind css there using import '../css/app.css'
- then creating an alias for folder inside the vite.config.js
- use the resolve {
    alias : {
        "@" : "/resources/js"
    }
}

- Note use two terminal by using php artisan serve and npm run dev
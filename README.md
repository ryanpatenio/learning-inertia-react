# 🚀 Learning Laravel 11 and Inertia and React js

### ✅ Phase 1: Installing

- [✅] installing all needed [laravel,inertia,react]
- [✅] understanding tailwind css diff than bootstrap
- [✅] tailwind @container queries
- [✅] Routes using Inertia



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

# Day 2
- using @container in tailwind it is useful in the dashboard widgets
- it is based on the parent container when the container width will drop into 768px which is md: you can set their it will be hidden
- but if you don't use the @ sign or container queries it will base only in the screen size not on the container width or size
- note before you can use this container queries first you put in the tailwind.config.js in the core plugins to set the container:true


## Note !
# Tailwind Css
- by using tailwind css the layout is not the same in bootstrap
- tailwind use mobile first to desktop layout
- example flex flex-col the flex-col is default for all screen size unless i add another like md:flex-row
it means when the screen is in larger size like desktop it will display the content in a row
- tailwind css the md: breakpoints start from the 768px to up while the bootstrap the md: from 768px to lower
- You can pass props from routes into your components using return Inertia::render('uri:',[props:])
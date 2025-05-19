import './bootstrap';
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import RootLayout from '@/Layouts/RootLayout'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page =  pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <RootLayout children={page} />);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress : {
    color : "#00ffff", //#39ff14 --neon green
    showSpinner: true
  
  }
})
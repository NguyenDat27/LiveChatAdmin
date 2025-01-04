import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/router.jsx'
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider i18n>
    <RouterProvider router={router}/>
    </AppProvider>
  </StrictMode>,
)

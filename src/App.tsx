import { BrowserRouter, Route, Routes } from 'react-router-dom'  // Import Routes and Route
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Home from '@/views/Home'  // Import the Home component
import Views from '@/views'
import appConfig from './configs/app.config'
import './locales'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <AuthProvider>
                    <Layout>
                        <Routes>  {/* Add Routes here to define paths */}
                            <Route path="/" element={<Home />} />  {/* Define the route for Home */}
                            {/* Add any other routes if needed */}
                            <Route path="*" element={<Views />} /> {/* Fallback for other routes */}
                        </Routes>
                    </Layout>
                </AuthProvider>
            </BrowserRouter>
        </Theme>
    )
}

export default App

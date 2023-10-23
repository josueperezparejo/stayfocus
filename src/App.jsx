import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ContactMePage, DashboardPage, EditTaskPage, HomePage, SignInPage, SignUpPage, TechnologiesPage } from './pages';
import { PrivateRoute, PublicRoute } from './router';
import { NewTaskPage } from './pages/NewTaskPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<PublicRoute><Navigate to={'/home'} /> </PublicRoute>} />

        <Route path='/home' element={<HomePage />} />
        <Route path='/technologies' element={<TechnologiesPage />} />
        <Route path='/contactMe' element={<ContactMePage />} />

        <Route path='/signIn' element={<PublicRoute> <SignInPage /> </PublicRoute>} />
        <Route path='/signUp' element={<PublicRoute> <SignUpPage /> </PublicRoute>} />

        {/* Private Routes */}
        <Route path='/dashboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path='/newTask' element={<PrivateRoute><NewTaskPage /></PrivateRoute>} />
        <Route path='/editTask/:taskId' element={<PrivateRoute><EditTaskPage /></PrivateRoute>} />

        {/* All Routes */}
        <Route path='/*' element={<PublicRoute> <Navigate to={'/signIn'} replace /> </PublicRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

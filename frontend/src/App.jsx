import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { createContext, useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Login from './Login';
import AuthProtector from './AuthProtector';
import SignUp from './SignUp';
import Logout from './Logout';
import OnBoarding from './OnBoarding';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';

const AuthContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const { error, data } = await supabase.auth.getUser();
    setUser(data.user)
    setLoading(false);
  }

  useEffect(() => {
    getUser();

    const { error, data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_IN") {
        setUser(session.user);
      } else if (event == "SIGNED_OUT") {
        setUser(null);
      }

      return () => data.subscription.unsubscribe();
    });


  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      <Routes>
        <Route path='/' element={<AuthProtector><Home /></AuthProtector>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/onboarding' element={<OnBoarding />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
export { AuthContext };
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate, Link } from "react-router";
import Navbar from '../components/shared/Navbar';

// test

export default function Login2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevents page refresh
        if (!email.trim() || !password.trim()) {
            alert("Please enter both an email and a password.");
            return;
        }

        setLoading(true);
        const { error, data } = await supabase.auth.signInWithPassword({ email, password });
        setLoading(false);

        if (error) {
            alert(error.message);
        } else if (data.user) {
            navigate('/dashboard'); // Redirect on success
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
                    <h3>Log in to track your progress</h3>
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ display: 'block', marginBottom: '10px', width: '90%' }} />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ display: 'block', marginBottom: '10px', width: '90%' }} />
                        <button type="submit" disabled={loading}>Login</button>
                        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
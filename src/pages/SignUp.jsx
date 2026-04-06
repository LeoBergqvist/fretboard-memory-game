import { useState } from 'react';
// import { supabase } from '../../supabaseClient';
import { supabase } from '../supabaseClient';
import { Link } from "react-router";
import Navbar from '../components/shared/Navbar';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("Please enter both an email and a password.");
            return;
        }

        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });
        setLoading(false);

        if (error) {
            alert(error.message);
        } else {
            alert('Account created! Please check your email inbox for a verification link.');
        }
    };

    return (
        <div>
            <Navbar />
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
                    <h3>Create an account</h3>
                    <form onSubmit={handleSignup}>
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ display: 'block', marginBottom: '10px', width: '90%' }} />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ display: 'block', marginBottom: '10px', width: '90%' }} />
                        <button type="submit" disabled={loading}>Sign Up</button>
                        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                            Already have an account? <Link to="/login">Log in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
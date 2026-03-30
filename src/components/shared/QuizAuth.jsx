import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

export default function QuizAuth({ currentScore }) {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // 1. Check if user is logged in on load and listen for changes
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    // 2. Handle Sign Up
    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) alert(error.message);
        else alert('Check your email for the confirmation link!');
        setLoading(false);
    };

    // 3. Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) alert(error.message);
        setLoading(false);
    };

    // 4. Save Score to Database
    const saveScore = async () => {
        if (!user) return;

        const { error } = await supabase
            .from('quiz_scores')
            .insert([{ user_id: user.id, score: currentScore }]);

        if (error) alert('Error saving score: ' + error.message);
        else alert('Score saved successfully! 🚀');
    };

    // UI rendering based on Auth State
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            {user ? (
                <div>
                    <h3>Welcome, {user.email}!</h3>
                    <p>Your current score: <strong>{currentScore}</strong></p>
                    <button onClick={saveScore}>Save My Score</button>
                    <button onClick={() => supabase.auth.signOut()} style={{ marginLeft: '10px' }}>
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <h3>Log in to save your score</h3>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br /><br />
                        <button type="submit" disabled={loading}>Login</button>
                        <button onClick={handleSignUp} disabled={loading} style={{ marginLeft: '10px' }}>
                            Create Account
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
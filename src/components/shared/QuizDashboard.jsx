import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from "react-router";

export default function QuizDashboard() {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [completedQuizzes, setCompletedQuizzes] = useState({});
    const quizList = [0, 1, 3, 5, 7, 10];
    const passScore = 70;
    let navigate = useNavigate();

    useEffect(() => {
        // Check session on load
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            if (session?.user) fetchCompletedQuizzes(session.user.id);
        });

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            if (session?.user) fetchCompletedQuizzes(session.user.id);
        });

        return () => subscription.unsubscribe();
    }, []);

    // Fetch completed quizzes
    const fetchCompletedQuizzes = async (userId) => {
        const { data, error } = await supabase
            .from('quiz_scores')
            .select('quiz_id, completed_at')
            .eq('user_id', userId);

        if (!error && data) {
            const quizMap = {};
            data.forEach(item => {
                quizMap[item.quiz_id] = new Date(item.completed_at).toLocaleDateString();
            });
            setCompletedQuizzes(quizMap);
        }
    };

    // --- Auth Handlers ---
    const handleAuth = async (type) => {
        if (!email.trim() || !password.trim()) {
            alert("Please enter both an email and a password.");
            return;
        }

        setLoading(true);
        const { error, data } = type === 'login'
            ? await supabase.auth.signInWithPassword({ email, password })
            : await supabase.auth.signUp({ email, password });

        setLoading(false);

        if (error) {
            alert(error.message);
            return;
        }

        if (type === 'signup') {
            alert('Account created! Please check your email inbox for a verification link.');
        } else if (type === 'login' && data.user) {
            // SUCCESSFUL LOGIN: Redirect to the index/home URL
            // window.location.href = '/';
            // <Navigate to="/login" />
            navigate('/');

            // NOTE: If you are using React Router, replace the line above with:
            // navigate('/'); (after importing useNavigate)
        }
    };

    // UI Rendering
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            {!user ? (
                /* 1. Only show login form if user is NOT logged in */
                <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
                    <h3>Log in to track your progress</h3>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ display: 'block', marginBottom: '10px', width: '90%' }} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ display: 'block', marginBottom: '10px', width: '90%' }} />
                    <button onClick={() => handleAuth('login')} disabled={loading}>Login</button>
                    <button onClick={() => handleAuth('signup')} disabled={loading} style={{ marginLeft: '10px' }}>Sign Up</button>
                </div>
            ) : (
                /* 2. Only show scores if user IS logged in */
                <div>
                    <h3>Welcome! Here is your dashboard:</h3>
                    <button onClick={() => supabase.auth.signOut()}>Logout</button>

                    <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        {quizList.map(quizId => {
                            const isCompleted = completedQuizzes.hasOwnProperty(quizId);
                            const completionDate = completedQuizzes[quizId];

                            return (
                                <div key={quizId} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', minWidth: '150px', textAlign: 'center' }}>
                                    <h4>Quiz #{quizId}</h4>
                                    <button style={{ backgroundColor: isCompleted ? '#e6f4ea' : '#f1f3f4' }}>
                                        {isCompleted ? 'Completed' : 'Locked'} {isCompleted && '✅'}
                                    </button>
                                    {isCompleted && (
                                        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '10px' }}>
                                            Passed: {completionDate}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
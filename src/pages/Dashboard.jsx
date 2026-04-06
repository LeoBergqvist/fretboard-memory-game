import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../components/shared/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

export default function Dashboard() {
    // const { user, logout } = useAuth(); // Destructure what we need
    const { user, loading, logout } = useAuth();

    useEffect(() => {
        console.log("USER:", user);
        console.log("LOADING:", loading);
    }, [user, loading]);

    const navigate = useNavigate();

    const [completedQuizzes, setCompletedQuizzes] = useState({});
    const quizList = [0, 1, 3, 5, 7, 10];

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);


    useEffect(() => {
        if (!user) return;

        const fetchCompletedQuizzes = async () => {
            const { data, error } = await supabase
                .from('quiz_scores')
                .select('quiz_id, completed_at')
                .eq('user_id', user.id);

            if (!error && data) {
                const quizMap = {};
                data.forEach(item => {
                    quizMap[item.quiz_id] = new Date(item.completed_at).toLocaleDateString();
                });
                setCompletedQuizzes(quizMap);
            }
        };

        fetchCompletedQuizzes();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <Navbar />
            <h3>Welcome! Here is your completed frets:</h3>

            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {quizList.map(quizId => {
                    const isCompleted = completedQuizzes.hasOwnProperty(quizId);
                    const completionDate = completedQuizzes[quizId];

                    return (
                        <div key={quizId} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', minWidth: '150px', textAlign: 'center' }}>
                            <h4>Fret {quizId}</h4>
                            <button style={{ backgroundColor: isCompleted ? '#3ede6b' : '#3e9cca' }}>
                                {isCompleted ? 'Completed' : 'Locked'} {isCompleted && '✅'}
                            </button>
                            {isCompleted && (
                                <p >
                                    Passed: {completionDate}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
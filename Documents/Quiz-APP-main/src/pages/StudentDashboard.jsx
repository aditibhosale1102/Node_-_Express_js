import { useEffect, useState } from "react";
import { getQuizzes } from "../services/quizService";

const StudentDashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await getQuizzes();
      setQuizzes(data);
    };
    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>Student Dashboard</h2>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h3>{quiz.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;

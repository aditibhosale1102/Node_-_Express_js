import { useState } from "react";
import { addQuiz } from "../services/quizService";

const TeacherDashboard = () => {
  const [title, setTitle] = useState("");

  const handleAddQuiz = async () => {
    await addQuiz({ title });
    alert("Quiz Added");
  };

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <input placeholder="Quiz Title"
        onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddQuiz}>Add Quiz</button>
    </div>
  );
};

export default TeacherDashboard;

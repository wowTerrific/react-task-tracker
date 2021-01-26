import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {

  const [tasks, setTasks] = useState([
	{
		id: 1,
		text: 'Doctors Appointment',
		day: 'Feb 5th at 2:30pm',
		reminder: true,
	},
	{
		id: 2,
		text: 'Grocery Shopping',
		day: 'Feb 6th at 1:30pm',
		reminder: true,
	},
	{
		id: 3,
		text: 'Work Meeting',
		day: 'Feb 5th at 12:00pm',
		reminder: false,
	}
  ])

  // Delete Task
  const deleteTask = (id) => {
	setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
	setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ));
  }

  return (
    <div className="container">
	<Header />
	{ tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p>No Tasks to Show.</p> }
    </div>
  );
}

export default App;

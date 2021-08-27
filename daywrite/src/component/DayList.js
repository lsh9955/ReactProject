import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function DayList() {
  const days = useFetch("https://reactprojectbyqwerty.herokuapp.com/days");
  if (days.length === 0) {
    return <span>loading...</span>;
  }
  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

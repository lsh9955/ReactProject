import { useParams } from "react-router";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {/* useParams에서의 day는 숫자가 아니라 문자임. */}
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

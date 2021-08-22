import dummy from "../db/data.json";
import { useParams } from "react-router";

export default function Day() {
  const { day } = useParams();

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {/* useParams에서의 day는 숫자가 아니라 문자임. */}
          {dummy.words
            .filter((a) => a.day === Number(day))
            .map((word) => (
              <tr key={word.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{word.eng}</td>
                <td>{word.kor}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default function App() {
  // const [cal, setCal] = useState("");

  const plus = (number) => {};

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input id='number' /> 만큼을 <button id='plus' onClick={}>더할게요</button> <button id='minus'>뺄게요</button>
        <button id='reset'>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p id='result'>0</p>
      </div>
    </div>
  );
}

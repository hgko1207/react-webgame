const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("형균");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setValue("");
      setWord(value);
    } else {
      setResult("땡");
      setValue("");
    }
    inputRef.current.focus();
  };

  const onChanageInput = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChanageInput} />
        <button>입력!!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;

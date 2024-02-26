import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const RefHookData = () => {
  const [userInput, setUserInput] = useState("");

  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <Wrapper>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <p>The number of times comp render:{count.current}</p>
      </Wrapper>
    </>
  );
};
export default RefHookData;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.4rem;
  border: 1px solid #ccc;
  padding: 10px;

  input {
    padding: 10px;
    font-size: 20px;

    border-radius: 4px;
    outline: none;
  }
`;

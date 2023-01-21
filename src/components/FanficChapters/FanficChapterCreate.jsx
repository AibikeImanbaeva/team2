import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';

const FanficChapterCreate = () => {
  const { id } = useParams();
  const { addChapter } = useContext(fanficContext)

  const [chapter, setChapter] = useState("");
  const [text, setText] = useState("");


  const handleAddChapter = () => {
    const newPage = new FormData();

    newPage.append("chapter", chapter);
    newPage.append("text", text);

    addChapter(newPage, id);
  }

  return (
    <>
      <input type="text" placeholder='chapter-name' value={chapter} onChange={(e) => setChapter(e.target.value)} />
      <input type="text" placeholder='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddChapter}>Добавить главу</button>
    </>
  );
};

export default FanficChapterCreate;
import { useState } from 'react';
// import { useState } from "react";
//このエラーは、TextInput.tsx ファイルで React がインポートされているものの、
// ファイル内で実際に使用されていないために発生しています。
// React v17以降、JSXを使用する際にはReactをスコープ内にインポートする必要がなくなりました。
//そのため、このインポートが不要になる場合があります。

const TextInput = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Text Input"
      />
      <p>Entered Text: {text}</p>
    </div>
  );
};

export default TextInput;

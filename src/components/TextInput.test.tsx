import userEvent from '@testing-library/user-event';
// import { render } from "react-dom";
import React, { render, screen } from '@testing-library/react';
// Which one
import TextInput from './TextInput';

test('TextInput Component Test', async () => {
  const user = userEvent.setup();
  // userEventはimportが必要
  render(<TextInput />);

  // textが存在するか(TextInput.tsxの中に Entered textがあるか)？をテストしたい。
  const textElement = screen.getByText('Entered Text:');
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText('Text Input');
  await user.type(inputElement, 'Hello World');
  expect(screen.getByText('Entered Text: Hello World')).toBeInTheDocument();
  // 正規表現を使用して、部分的なマッチを許容する
  // expect(screen.getByText(/Entered Text: Hello World/)).toBeInTheDocument();
});

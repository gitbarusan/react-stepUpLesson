import { useState, useCallback, useMemo } from "react";
import { ChileArea } from "./components/ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => setOpen(!open); // 処理が変わらなければ(第２引数の配列の中身が変わらなければ)同じ関数を使用する（再生成しないようにする） // useCallbackの第２引数の配列を空の配列にしたら最初１回だけ生成

  // 下記の書き方だとApp.jsが再レンダリングされた際onClickCloseが再生成
  // →ChileAreaのpropsが変更されたと認識されてChileAreaが再レンダリングされる
  // const onClickClose = () => setOpen(false);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  //変数のmemo化　useMemoの第２引数を空の配列にすることで最初の１度だけ1+３の処理が走る
  // もしくは第２引数の配列の中身が変更があった場合のみ処理をすることも出来る
  const temp = useMemo(() => 1 + 3 , [] )
  return (
    <div className="App">
      <input onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChileArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

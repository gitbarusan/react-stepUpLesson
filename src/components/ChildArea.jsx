import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memoで囲むことでpropsが変更された場合のみレンダリングされる
export const ChileArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChileAreaが再レンダリングされた!!");

  const data = [...Array(200).keys()];
  data.forEach((value) => {
    console.log(value);
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

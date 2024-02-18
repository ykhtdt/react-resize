import { ResizeBox } from "../../lib/react-resize";

import "./app.css";

export default function App() {
  return (
    <>
      <ResizeBox
        maxConstraints={[400, 600]}
        top={200}
        left={500}
        width={330}
        height={222}
        resizeHandleAxis={["n", "ne", "e", "se", "s", "sw", "w", "nw"]}
        className="box"
      >
        Resize Box Example
      </ResizeBox>
    </>
  )
}

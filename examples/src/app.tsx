import ResizeBox from "../../app/src/resize-box";

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
        className="inline-block border border-red-500"
      >
        Resize Box Example
      </ResizeBox>
    </>
  )
}

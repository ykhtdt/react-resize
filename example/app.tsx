import ResizeBox from "../src/resize-box";

export default function App() {
  return (
    <div>
      <ResizeBox
        maxConstraints={[400, 600]}
        top={200}
        left={500}
        width={440}
        height={222}
        resizeHandleAxis={["n", "ne", "e", "se", "s", "sw", "w", "nw"]}
        className="inline-block border border-red-500"
      >
        Resize Box Example
      </ResizeBox>
    </div>
  )
}

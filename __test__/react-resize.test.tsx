import { render, screen } from "@testing-library/react";
import { ResizeBox, ResizableBoxProps } from "../lib/react-resize";
import "@testing-library/jest-dom";

// export class IntersectionObserver {
//   root = null;
//   rootMargin = "";
//   thresholds = [];

//   disconnect() {
//     return null;
//   }

//   observe() {
//     return null;
//   }

//   takeRecords() {
//     return [];
//   }

//   unobserve() {
//     return null;
//   }
// }

// window.IntersectionObserver = IntersectionObserver;
// global.IntersectionObserver = IntersectionObserver;

describe("ResizeBox render", () => {
  const props = {
    maxConstraints: [400, 600],
    top: 200,
    left: 500,
    width: 350,
    height: 250,
    resizeHandleAxis: ["n", "ne", "e", "se", "s", "sw", "w", "nw"],
    className: "box"
  } as ResizableBoxProps;

  it("Correct props", () => {
    const { container } = render(<ResizeBox {...props} />);

    console.log(container);
  });
});

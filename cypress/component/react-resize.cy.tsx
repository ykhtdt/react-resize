import { ResizeBox } from "../../lib/react-resize";

describe('react-resize.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<ResizeBox>resize-box</ResizeBox>);
  })
})
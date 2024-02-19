import { ResizeBox } from "../../lib/react-resize";

describe("react-resize.cy.tsx", () => {
  const children = <div data-testid="resize-children">React Resize Children</div>

  it("mounts", () => {
    cy.mount(<ResizeBox>{children}</ResizeBox>);

    cy.get("[data-cy=wrapper]").children().should("have.length.greaterThan", 0);
  })
})
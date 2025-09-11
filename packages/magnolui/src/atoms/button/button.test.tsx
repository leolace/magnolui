import { magRender } from "@mag/tests/render";
import { page, userEvent } from "@vitest/browser/context";
import { MagButton } from "./button.component";

test("loads and displays greeting", async () => {
  // ARRANGE
  magRender(<MagButton type="filled">Load Greeting</MagButton>, {});

  // ACT
  await userEvent.click(page.getByRole("button"));

  // ASSERT
  expect(page.getByRole("button")).toHaveTextContent("Load Greeting");
});

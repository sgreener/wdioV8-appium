import { FirstScreen } from "../pom/firstScreen.page.ts";

describe("example test describe", () => {
    it("example test it", async () => {

        const page = new FirstScreen();
        await page.navigateTo();

        console.log("Running");
    })
})
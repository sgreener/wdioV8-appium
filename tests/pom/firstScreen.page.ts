
export class FirstScreen {

    async navigateTo(): Promise<void> {
        console.log("Navigating");
        await driver.closeApp();
        await driver.launchApp();

    }

}
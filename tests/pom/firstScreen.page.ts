
export class FirstScreen {

    async restartApp(): Promise<void> {
        console.log("Navigating");
        await driver.closeApp();
        await driver.launchApp();
    }

}
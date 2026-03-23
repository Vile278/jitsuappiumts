import {TutorialPage} from '../pages/TutorialPage'

export async function verifyTutorialPage()
{
    const tutorialPage = new TutorialPage;
    await tutorialPage.verifyDisplayed();   
}

export async function startTutorialPage()
{
    const tutorialPage = new TutorialPage;
    await tutorialPage.startTutorial();   
}

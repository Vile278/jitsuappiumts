export async function clickIfDisplayed(xpath: string, timeout = 5000) {
  const el = await $(xpath);
  try {
    await el.waitForDisplayed({ timeout });
    await el.click();
    return true;
  } catch {
    return false;
  }
}

export async function typeText(xpath: string, text: string, timeout = 10000) {
  const el = await $(xpath);
  await el.waitForDisplayed({ timeout });
  await el.click();
  await el.setValue(text);
}
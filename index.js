import puppeteer from 'puppeteer';

/**
 * Get all certificates and diplomas
 * @param {String} certificateNumber Certificate/diploma number
 * @param {String} lastName Last name without prefix
 * @returns Certificates
 */
const getCerts = async (certificateNumber, lastName) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://portal.hetoranjekruis.nl/certificatechecker/');
  await page.type('input[name="cert_number"]', certificateNumber);
  await page.type('input[name="last_name"]', lastName);
  await page.click('button[type=submit]');
  await page.waitForTimeout(2000);
  const array = await page.evaluate(() => Array.from(document.querySelectorAll('td'), (element) => element.textContent));
  await browser.close();

  let certificates = [];

  for (let i = 0; i <= array.length / 4; i++) {
    const oneCertArray = array.splice(0, 4);
    const certificateObject = {
      name: oneCertArray[0],
      type: oneCertArray[1],
      received: oneCertArray[2],
      expires: oneCertArray[3],
    };
    certificates.push(certificateObject);
  }

  return certificates;
};

export { getCerts };

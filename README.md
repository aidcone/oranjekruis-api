# 🔶 Oranje Kruis API

This library uses Puppeteer to fetch Oranje Kruis certificates and diplomas.<br>
Originally created by [Ruben Uijtdewilligen](https://github.com/rubenuijtdewilligen/) for [EHBO Vereniging Roosendaal](https://ehboroosendaal.nl/).

## Usage

There is just one function, `getCerts`, and it takes two arguments. The first is the certificate number and the second is the certificate holder's last name without prefix.

```JS
import { getCerts } from '../index.js';
getCerts('12345678', 'Smith').then((certs) => {
    // [
    //     {
    //         name: 'Eerste Hulp',
    //         type: 'Diploma',
    //         received: '11-11-2011',
    //         expires: '11-11-2022'
    //     }
    // ]
});
```

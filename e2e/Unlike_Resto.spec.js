const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Unlike Resto');

Before(({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-title', 20);
  I.seeElement('.resto-title a');
  I.click(locate('.resto-title a').first());

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
});

Scenario('Showing Liked Restaurant', ({ I }) => {
  I.seeElement('.restaurant');
});

Scenario('Unlike a Restaurant', async ({ I }) => {
  I.seeElement('.resto-title');
  I.click(locate('.resto-title a').first());

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton[aria-label="unlike this restaurant"]');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForText('Tidak ada film untuk ditampilkan', 20);
  I.see('Tidak ada film untuk ditampilkan', '.restaurant');
});

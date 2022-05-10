const assert = require('assert');

const { async } = require('regenerator-runtime');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Showing Empty Liked Restaurants', ({ I }) => {
  I.waitForText('Tidak ada film untuk ditampilkan', 30);
  I.see('Tidak ada film untuk ditampilkan', '.restaurant');
});

Scenario('Liking One Restaurant', async ({ I }) => {
  I.waitForText('Tidak ada film untuk ditampilkan', 30);
  I.see('Tidak ada film untuk ditampilkan', '.restaurant');

  I.amOnPage('/');

  I.waitForElement('.resto-title');
  I.seeElement('.resto-title a');

  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.restaurant');
  I.seeElement('.restaurant');
  const likedRestoTitle = await I.grabTextFrom('.resto-title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

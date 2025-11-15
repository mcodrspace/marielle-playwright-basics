import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.allbirds.com/');
  await expect(page.getByRole('navigation')).toMatchAriaSnapshot(`
    - link "Allbirds":
      - /url: https://www.allbirds.com/?a_ajs_event=Navigation+Clicked&a_ajs_prop_navigation_level_1=allbirds&a_ajs_prop_navigation_source=www.allbirds.com%2F&a_ajs_prop_navigation_type=global
      - img
    - button "Men"
    - button "Women"
    - button "Sale"
    - list:
      - listitem:
        - link "Our Stores":
          - /url: https://www.allbirds.com/pages/stores?a_ajs_event=Navigation+Clicked&a_ajs_prop_navigation_level_1=our+stores&a_ajs_prop_navigation_source=www.allbirds.com%2F&a_ajs_prop_navigation_type=global
      - listitem:
        - link "About":
          - /url: https://www.allbirds.com/pages/our-story?a_ajs_event=Navigation+Clicked&a_ajs_prop_navigation_level_1=about&a_ajs_prop_navigation_source=www.allbirds.com%2F&a_ajs_prop_navigation_type=global
      - listitem:
        - link "ReRun":
          - /url: https://www.rerun.allbirds.com/?a_ajs_event=Navigation+Clicked&a_ajs_prop_navigation_level_1=rerun&a_ajs_prop_navigation_source=www.allbirds.com%2F&a_ajs_prop_navigation_type=global
    - list:
      - listitem:
        - link "Search":
          - /url: https://www.allbirds.com/search?a_ajs_event=Navigation+Clicked&a_ajs_prop_navigation_level_1=Search&a_ajs_prop_navigation_source=www.allbirds.com%2F&a_ajs_prop_navigation_type=global
          - img
      - listitem:
        - link "Account":
          - /url: /account
          - img
      - listitem:
        - link "Help":
          - /url: https://www.allbirds.com/pages/help?a_ajs_event=Navigation+Clicked&a_ajs_prop_navigation_level_1=help&a_ajs_prop_navigation_source=www.allbirds.com%2F&a_ajs_prop_navigation_type=global
          - img
      - listitem:
        - button "View Cart":
          - img
    `);
});
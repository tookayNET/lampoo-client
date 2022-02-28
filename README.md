# Lampoo Wishlist clone exercise
## CLIENT setup
This exercise requires both the server and client to be setup.

The server setup instructions, which will provide the JSON data to the client, can be found in the *lampoo-server repo* README.MD at https://github.com/tookayNET/lampoo-server.git.

---
## Design
1. An Express Server was built to serve the static JSON data for populating the wishlist.
2. A React client was setup with `npx create react app`.

---


## Installation and execution
1. Ensure NODE and NPM are installed.
2. In a directory of your choosing create a new sub-directory with **`mkdir lampoo_exercise`**.
3. **`cd lampoo_exercise`**.
4. **`npm install`** to install the required dependcies.

---

## Outstanding Items
1. *Underlines of the navbar* items on the Lampoo site are animated, with a slide in from the left. 
2. The grey *OFFERS banner* below the navbar has not been implemented with the sluggish-bounce scroll away effect which exists on the Lampoo site.
3. I used free FontAweseome icons for the *"X" remove item* buttons. Unfortunately these are darker than the ones found on the Lampoo site.
4. When *resizing the width of the page*, the Lampoo site reduces the vertical dimensions of each product.

---
## TODO
1. Select Size dropdown menu.
2. ~~Move fetch logic in to own component.~~
3. Convert all TS "any's" to proper format
4. Refactor all CSS; alphabeticise, rename, etc.
5. Replace navbar with burger and reduce logo to 50% on resize.
6. Check accessibility.
7. Make OFFERS bounce
8. NAVBAR underline animation.
9. Create git.repo.
10. Reduce DB.JSON to its official size.
11. Create README.MD for both.
12. Create test suite.
13. Deployment instructions for BE + FE.
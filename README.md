# Lampoo Wishlist clone exercise
## CLIENT setup
This exercise requires both the server and client to be setup.

The server setup instructions, which will provide the JSON data to the client, can be found in the *lampoo-server repo* README.MD at https://github.com/tookayNET/lampoo-server.git.

---
## Design
1. An Express Server was built to serve the static JSON data for populating the wishlist.
2. A React client was setup with `npx create react app`.
3. Communication with the server used the fetch API contained in the **APIservice.js** file.
4. All styling was contained in a single **stylesheet.css** file at *./components/styles*.
5. The page was split in to a **header** (static at top of page) and **main** (scrollable) class.
6. The **header** contained the **topbar** and **navbar** components while the **main** contained the **wishlist** product listing.
7. The **wishlist** component is made up of a title and then and **items** component.
8. Within the **items** component are individual **item** components for each product on the whishlist.


---
## Installation and execution
1. Ensure Node and NPM are installed.
2. In a directory of your choosing create a new sub-directory to house the client and server (eg. **`mkdir lampoo_exercise`**).
3. Switch in to this directory (eg. **`cd lampoo_exercise`**).
4. Run **`git clone https://github.com/tookayNET/lampoo-client.git`** to clone the client repo in to a **./lampoo-client** sub-directory.
5. Switch in to this newly created client directory (eg. **`cd lampoo-client`**).
6. Run **`npm install`** to install all the required server dependencies.
7. In the **APIservice.js** file, in line 1 edit the **const BASE_URL = "http://localhost:3123";** line if necessary so that the port number reflects the port used by your server (if you have changed it in the *./server/.env* file)
8. To launch the client, execute **`npm start`** from the ./lampoo-client directory.

---
## Outstanding Items
1. *Underlines of the navbar* items on the Lampoo site are animated, with a slide in from the left. 
2. The grey *OFFERS banner* below the navbar has not been implemented with the sluggish-bounce scroll away effect which exists on the Lampoo site.
3. I used free FontAweseome icons for the *"X" remove item* buttons. Unfortunately these are darker than the ones found on the Lampoo site.
4. When *resizing the width of the page*, the Lampoo site reduces the vertical dimensions of each product.

---
## TODO
1. Select Size dropdown menu.
2. Convert all TS "any's" to proper format
3. Refactor all CSS; alphabeticise, rename, etc.
4. Reduce DB.JSON to its official size.
5. Remove console.logs.
5. ~~Move fetch logic in to own component.~~
6. Replace navbar with burger and reduce logo to 50% on resize.
7. Check accessibility throughout?
8. Make OFFERS "bounce".
9. NAVBAR underline animations.
10. ~~Create git.repo.~~
11. ~~Create README.MD for both.~~
12. Create test suite.
13. Deployment instructions for BE + FE.
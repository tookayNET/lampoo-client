# Lampoo Wishlist clone exercise
## CLIENT setup
This exercise requires both the server and client to be setup.

The server setup instructions, which will provide the JSON data to the client, can be found in the *lampoo-server repo* README.MD at https://github.com/tookayNET/lampoo-server.git.

---
## Design
1. An Express Server was built to serve the static JSON data for populating the wishlist.
2. A React client was setup with `npx create react app`.
3. Communication with the server uses the fetch API contained in the **APIservice.js** file.
4. All styling is contained in a single **stylesheet.css** file at *./components/styles*, rather than as separate stylesheets for each component. This assists with consistency and DRY content, but if more components were added that modularising the stylesheets may be better.
5. In terms of structure, the page is split in to **header** (static at top of page) and **main** (scrollable) classes.
6. The **header** contains the **topbar** and **navbar** components while the **main** sections contains the **wishlist** product listing.
7. The grey **offers** component bar is free-floating between the two.
8. The **wishlist** component is made up of a title and then and **items** component.
9. Within the **items** component are individual **item** components for each product on the wishlist.
10. Media queries are minimal and primarily limited to the navbar vanishing and being replaced by a burger-menu with a reduction in the Lampoo logo, when the window is reduced below 830px in width. I added some dummy icons to the topbar for this case.

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
1. *Underlines of the navbar* items on the Lampoo site are animated, with a slide in from the left. I haven't successfully implemented this transition and would probably convert existing underlines from being *text-decoration* to *box-border*.
2. The grey *OFFERS banner* below the navbar has not been implemented with the sluggish-bounce scroll away effect which exists on the Lampoo site.
3. I used free FontAweseome icons for the *"X" remove item* buttons. Unfortunately these are darker than the ones found on the Lampoo site.
4. When *resizing the width of the page* down, the Lampoo site maximises then reduces the dimensions of each product image and progressively limits the visible columns from 5 to 4 then 2 maximum. My attempts at this were failing so I haven't implemented the same.

---
## TODO
0. Select Size dropdown menu.
0. Make Size dropdown overlay.

1. Scale card sizes as screen size increases.
- 5-4-2 cols
- max height of image

2. Make OFFERS "bounce".
3. NAVBAR underline animations.

4. Create test suite.
5. Deployment instructions for BE + FE.


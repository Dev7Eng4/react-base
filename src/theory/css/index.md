`https://www.builder.io/blog/css-tips-for-better-web-development`

# Create smooth snapping carousels with scroll nap

.container {
scroll-snap-type: x mandatory;
overflow-x: auto;
}

.item {
scroll-snap-align: start; (start | center | end)
}

# Sticky header and footer

body {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto 1fr auto;
grid-template-areas:
"header"
"main"
"footer";
}

header {
grid-area: header;
}

main {
grid-area: main;
}

footer {
grid-area: footer;
}

`another`

/_ create 2 colums for the section element _/
section {
display: grid;
grid-template-columns: 1fr 1fr;
}

/_ make the left side stick to the top which allows the right side to scroll _/
.title-section {
position: sticky;
top: 0;
}

# Use backdrop-filtter: blur to blur background

"lint-staged": {
"_.{js,jsx,ts,tsx}": [
"yarn lint"
],
"_.{md,json}": [
"yarn prettify"
]
}

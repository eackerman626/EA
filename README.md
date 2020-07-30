# EA App

Access my deployed site at https://5ef0fb330401dc00078238be--affectionate-edison-91a884.netlify.app/

In browser view, hover over the donut charts to see names and percentages. You can print the page, save a pdf, or download json data from the menu.

It's mobile friendly, too! Open the link on your smartphone, or switch to mobile view from dev tools and refresh the page to apply the changes on your computer. Tap the segments of the donut charts to see their names and percentages.

This is a data visualization site that displays data from an API endpoint (https://api.data.gov/ed/collegescorecard/v1/schools/).
I received an API key and found the specific school ID for UW Madison, which I used as the school for this particular site. All of the data displayed is from UW's most recent school year on file.

The data is retrievedin /client/components/School.js from the API endpoint using Axios, and it is displayed in donut charts via a library built on React-D3. There was an issue with the particular donut chart library that I found (react-d3-donut), so I copied that into a git repository of my own, made changes there, and turned that into an npm package that I installed into my project. I created each React component in the /client/components folder, incorporating them all ultimately into the Main.js component. I used Webpack as a bundler and Bootstrap for formatting.

There are a few scripts in the /utils folder that I created to assist with presenting data and making calculations.

I deployed this site with Netlify.

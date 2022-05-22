# myEarth

A 24-hour hackathon project

## Inspiration

Climate change is a pressing issue and education is the first step in combating it. <br><br>
We were also inspired by the Google Earth 3D interactive globe. We all thought it looked super cool and it'd be amazing if we could have something like that in a webpage!

## What it does

myEarth is a unique educational website catered to middle school-aged children, educating them on dangerous gas emissions and providing them with climate change solutions they can use in their daily lives.<br><br>
The centerpiece of the website is a fully interactable 3D globe. You can zoom in on and rotate the globe as well as hover over the various countries to view the carbon emission stats of each. The countries themselves are colored like a heat map based on carbon emissions in each country.
![Short Demo Gif of Globe](https://media.discordapp.net/attachments/977555158743515219/977926097385693234/cap.gif?width=949&height=753)

## How we built it

We used a variety of technologies to build the website including BootStrap, require.js, globe.gl, json/geojson, JS, HTML, and CSS.<br><br>
We collected and processed emission data from [https://edgar.jrc.ec.europa.eu/](https://edgar.jrc.ec.europa.eu/).

## Challenges we ran into

The biggest challenge we ran into was the creation of the 3D interactable globe which showcases the greenhouse emissions by country.<br><br>
It was really hard to find a suitable technology to implement this with and we tried a lot of them. We finally settled on globe gl after (most notably) trying Three.js as well as Google Earth Engine. We were well into the hackathon before we finally stumbled across globe.gl. We initially thought we'd need Node.js to get it running but we figured out how to do it all via CDNs. We quickly redid our data processing to match globe.gl's needs and all the hours and hours of work were suddenly visualized!

## Accomplishments that we're proud of

Getting the globe on there. We were so worried that this wasn't going to be doable within the scope of 24 hours especially considering none of us had done anything like this before. But we got it working! We're so so so happy with how it looks and how it works.<br><br>
We love the way we used anchor links to create smooth transitions between full screen views.<br><br>
We love our custom scroll bar!! :)<br><br>
We love the overall look and feel of our finished website (especially the parallax scroll effect).<br><br>
Also we all got some sleep.

## What we learned  

We learned a lot.<br><br>
We learned about new JavaScript packages like globe.gl that empowered us to create easily-interpretable visualizations of our data through the interactive globe.<br><br>
We learned how to plan a project from start to finish and work as a team to quickly accomplish our goal.<br><br>
We learned tons about CSS and HTML.

## What's next for myEarth

myEarth.tech will continue running as an educational website for a year until the free domain expires, after which it will still be available on GitHub. We will be adding more onto it later on. A planned feature is different gas emission overlays; the current one is for CO2 but we think it'd be super neat to be able to pick a gas to view statistics for.

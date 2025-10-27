// ==== Full Week Data: Wed → Sun ====
const weekData = [
    { day: "Wed", hours:[
        { label:"1am", train:35, siren:50, people:45 },
        { label:"2am", train:15, siren:26, people:30 },
        { label:"3am", train:10, siren:15, people:15 },
        { label:"4am", train:0, siren:0, people:0 },
        { label:"5am", train:0, siren:0, people:0 },
        { label:"6am", train:0, siren:0, people:0 },
        { label:"7am", train:0, siren:0, people:45 },
        { label:"8am", train:79, siren:65, people:79 },
        { label:"9am", train:85, siren:55, people:89 },
        { label:"10am", train:89, siren:29, people:90 },
        { label:"11am", train:75, siren:90, people:79 },
        { label:"12pm", train:0, siren:0, people:99 },
        { label:"1pm", train:0, siren:0, people:0 },
        { label:"2pm", train:0, siren:0, people:0 },
        { label:"3pm", train:0, siren:0, people:0 },
        { label:"4pm", train:0, siren:0, people:0 },
        { label:"5pm", train:0, siren:0, people:0 },
        { label:"6pm", train:0, siren:0, people:0 },
        { label:"7pm", train:0, siren:80, people:89 },
        { label:"8pm", train:76, siren:79, people:78 },
        { label:"9pm", train:55, siren:95, people:77 },
        { label:"10pm", train:50, siren:50, people:57 },
        { label:"11pm", train:40, siren:35, people:35 },
        { label:"12am", train:30, siren:16, people:13 },
      ]
    },
    { day: "Thu", hours:[
        { label:"1am", train:30, siren:25, people:35 },
        { label:"2am", train:10, siren:10, people:25 },
        { label:"3am", train:0, siren:0, people:0 },
        { label:"4am", train:0, siren:0, people:0 },
        { label:"5am", train:0, siren:0, people:0 },
        { label:"6am", train:0, siren:0, people:0 },
        { label:"7am", train:0, siren:0, people:0 },
        { label:"8am", train:0, siren:80, people:0 },
        { label:"9am", train:85, siren:50, people:0 },
        { label:"10am", train:89, siren:75, people:80 },
        { label:"11am", train:75, siren:90, people:79 },
        { label:"12pm", train:80, siren:95, people:99 },
        { label:"1pm", train:0, siren:0, people:0 },
        { label:"2pm", train:0, siren:0, people:0 },
        { label:"3pm", train:0, siren:0, people:0 },
        { label:"4pm", train:0, siren:0, people:0 },
        { label:"5pm", train:0, siren:0, people:0 },
        { label:"6pm", train:0, siren:0, people:0 },
        { label:"7pm", train:0, siren:0, people:0 },
        { label:"8pm", train:0, siren:85, people:0 },
        { label:"9pm", train:60, siren:60, people:40 },
        { label:"10pm", train:40, siren:75, people:25 },
        { label:"11pm", train:25, siren:45, people:10 },
        { label:"12am", train:20, siren:12, people:10 },
      ]
    },
    { day: "Fri", hours:[
        { label:"1am", train:40, siren:10, people:67 },
        { label:"2am", train:5, siren:5, people:58 },
        { label:"3am", train:5, siren:0, people:35 },
        { label:"4am", train:0, siren:0, people:0 },
        { label:"5am", train:0, siren:0, people:0 },
        { label:"6am", train:0, siren:0, people:0 },
        { label:"7am", train:0, siren:0, people:0 },
        { label:"8am", train:90, siren:0, people:0 },
        { label:"9am", train:80, siren:80, people:75 },
        { label:"10am", train:85, siren:70, people:79 },
        { label:"11am", train:95, siren:85, people:87 },
        { label:"12pm", train:80, siren:95, people:89 },
        { label:"1pm", train:75, siren:50, people:67 },
        { label:"2pm", train:70, siren:80, people:54 },
        { label:"3pm", train:67, siren:45, people:53 },
        { label:"4pm", train:70, siren:40, people:43 },
        { label:"5pm", train:75, siren:65, people:56 },
        { label:"6pm", train:95, siren:60, people:68 },
        { label:"7pm", train:70, siren:70, people:79 },
        { label:"8pm", train:65, siren:54, people:85 },
        { label:"9pm", train:59, siren:46, people:98 },
        { label:"10pm", train:35, siren:35, people:89 },
        { label:"11pm", train:30, siren:26, people:96 },
        { label:"12am", train:20, siren:46, people:95 },
      ]
    },
    { day: "Sat", hours:[
        { label:"1am", train:80, siren:45, people:89 },
        { label:"2am", train:75, siren:42, people:97 },
        { label:"3am", train:35, siren:23, people:95 },
        { label:"4am", train:23, siren:0, people:54 },
        { label:"5am", train:0, siren:0, people:0 },
        { label:"6am", train:0, siren:0, people:0 },
        { label:"7am", train:0, siren:50, people:0 },
        { label:"8am", train:0, siren:57, people:0 },
        { label:"9am", train:75, siren:68, people:67 },
        { label:"10am", train:87, siren:78, people:68 },
        { label:"11am", train:79, siren:89, people:76 },
        { label:"12pm", train:75, siren:65, people:88 },
        { label:"1pm", train:67, siren:54, people:54 },
        { label:"2pm", train:70, siren:65, people:33 },
        { label:"3pm", train:65, siren:79, people:75 },
        { label:"4pm", train:45, siren:53, people:45 },
        { label:"5pm", train:55, siren:45, people:43 },
        { label:"6pm", train:76, siren:64, people:24 },
        { label:"7pm", train:80, siren:35, people:56 },
        { label:"8pm", train:75, siren:45, people:67 },
        { label:"9pm", train:89, siren:43, people:42 },
        { label:"10pm", train:85, siren:33, people:43 },
        { label:"11pm", train:80, siren:24, people:32 },
        { label:"12am", train:75, siren:45, people:21 },
      ]
    },
    { day: "Sun", hours:[
        { label:"1am", train:45, siren:10, people:15 },
        { label:"2am", train:15, siren:5, people:5 },
        { label:"3am", train:4, siren:0, people:0 },
        { label:"4am", train:0, siren:0, people:0 },
        { label:"5am", train:0, siren:0, people:0 },
        { label:"6am", train:0, siren:0, people:35 },
        { label:"7am", train:0, siren:45, people:45 },
        { label:"8am", train:95, siren:67, people:78 },
        { label:"9am", train:89, siren:87, people:85 },
        { label:"10am", train:75, siren:65, people:83 },
        { label:"11am", train:65, siren:50, people:89 },
        { label:"12pm", train:79, siren:89, people:95 },
        { label:"1pm", train:75, siren:54, people:85 },
        { label:"2pm", train:67, siren:45, people:90 },
        { label:"3pm", train:65, siren:46, people:75 },
        { label:"4pm", train:79, siren:67, people:67 },
        { label:"5pm", train:70, siren:43, people:66 },
        { label:"6pm", train:64, siren:35, people:45 },
        { label:"7pm", train:78, siren:30, people:60 },
        { label:"8pm", train:76, siren:50, people:76 },
        { label:"9pm", train:59, siren:45, people:43 },
        { label:"10pm", train:55, siren:39, people:46 },
        { label:"11pm", train:43, siren:25, people:34 },
        { label:"12am", train:12, siren:15, people:23 },
      ]
    },
  ];

// Data Signs
const emojiMap = { train: "🚇", siren: "🚨", people: "💬" };

// ==== Setup ====
const width = window.innerWidth;
const height = window.innerHeight;
const cx = width / 2;
const cy = height / 2;
const svg = d3.select("#chart").append("svg")
  .attr("width", width)
  .attr("height", height);

let dayIndex = 0;
const mainPatternRadius = 250;

// Compute safe radius for surrounding suns
const maxRadiusX = width/2 - 50;   // padding
const maxRadiusY = height/2 - 50;
const surroundingRadius = Math.min(maxRadiusX, maxRadiusY, 300);

// Tooltip
const tooltip = d3.select("body").append("div").attr("class","tooltip");

// ==== Replace drawDays() ====

function drawDays(activeIndex = null) {
  svg.selectAll(".dayPoint").remove();
  const angleStep = (2 * Math.PI) / weekData.length;

  // Emojis for different times of day
  const timeEmojis = ["🌙", "🕛", "🌅", "🌞", "🌇"];

  // Increase distance between emojis and center
  const expandedRadius = surroundingRadius * 1.5; // make them farther out

  weekData.forEach((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x = (i === activeIndex) ? cx : cx + Math.cos(angle) * expandedRadius;
    const y = (i === activeIndex) ? cy : cy + Math.sin(angle) * expandedRadius;

    const g = svg.append("g")
      .attr("class", "dayPoint")
      .attr("transform", `translate(${x},${y})`);

    // Bigger clock/time emoji
    g.append("text")
      .text(timeEmojis[i % timeEmojis.length])
      .attr("font-size", i === activeIndex ? 80 : 60) // was 40/25 → now 80/60
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .style("cursor", "pointer")
      .on("click", () => showPatterns(d, i));
  });
}



// Show patterns for clicked day
function showPatterns(day, index){
  dayIndex = index;
  drawDays(index);
  svg.selectAll(".pattern").remove();
  const g = svg.append("g").attr("class","pattern");

  let allShapes = [];
  day.hours.forEach(hour=>{
    if(hour.train) allShapes.push({type:"train", loudness:hour.train, label:hour.label});
    if(hour.siren) allShapes.push({type:"siren", loudness:hour.siren, label:hour.label});
    if(hour.people) allShapes.push({type:"people", loudness:hour.people, label:hour.label});
  });

  const totalShapes = allShapes.length;

  allShapes.forEach((s,i)=>{
    const shapeElem = document.createElementNS("http://www.w3.org/2000/svg","text");
    const node = d3.select(shapeElem);

    // Size by loudness
    const minSize = 10;
    const maxSize = 40;
    const baseSize = minSize + (maxSize - minSize) * (s.loudness/100);

    node.text(emojiMap[s.type] || "❓")
      .attr("font-size", baseSize)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle");

    // Radial layout + jitter
    const angle = (i / totalShapes) * 2 * Math.PI;
    const distance = mainPatternRadius * (0.5 + Math.random()*0.5);
    const jitter = 20;
    const x = cx + Math.cos(angle)*distance + (Math.random()-0.5)*jitter;
    const y = cy + Math.sin(angle)*distance + (Math.random()-0.5)*jitter;

    node.attr("transform",`translate(${x},${y})`);
    g.node().appendChild(shapeElem);

    // Bounce animation
    function bounce(){ 
      const t = Date.now() / 400;          // slightly slower rhythm
      const amplitude = 0.4;               // increased from 0.15 → 0.4 for more obvious shrinking/expanding
      const baseScale = 1;                 // center scale
      const sScale = baseScale + Math.sin(t) * amplitude;
      
      node.attr("transform", `translate(${x},${y}) scale(${sScale})`);
      requestAnimationFrame(bounce);
    }
    
    bounce();

// Tooltip
node.on("mousemove",(event)=>{
    tooltip.html(`<b>${s.type.toUpperCase()}</b><br>Day: ${day.day}<br>Time: ${s.label}<br>Loudness: ${s.loudness}`)
      .style("left",(event.pageX+15)+"px")
      .style("top",(event.pageY-25)+"px")
      .transition().duration(100).style("opacity",1);
  }).on("mouseout",()=>{
    tooltip.transition().duration(200).style("opacity",0);
  });
  
  });
}

// Initial draw
drawDays();
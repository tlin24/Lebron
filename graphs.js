const spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 700,
  "height": 400,
  "data": {
    "values": [
      {"Player": "LeBron James",  "Year": 2003, "Value": 1, "Event": "Drafted #1"},
      {"Player": "Stephen Curry", "Year": 2009, "Value": 1, "Event": "Drafted #7"},
      {"Player": "LeBron James",  "Year": 2012, "Value": 2, "Event": "1st Championship"},
      {"Player": "Stephen Curry", "Year": 2015, "Value": 2, "Event": "1st Championship"},
      {"Player": "LeBron James",  "Year": 2016, "Value": 3, "Event": "3-1 Comeback"},
      {"Player": "Stephen Curry", "Year": 2017, "Value": 3, "Event": "Warriors Dynasty"}
    ]
  },
  "layer": [
    {
      "mark": { "type": "line", "point": { "filled": true, "size": 80 } },
      "encoding": {
        "x": { "field": "Year", "type": "quantitative", "title": "Year" },
        "y": { "field": "Value", "type": "quantitative", "axis": null },
        "color": { "field": "Player", "type": "nominal" }
      }
    },
    {
      "transform": [{ "filter": "datum.Player === 'LeBron James'" }],
      "mark": { "type": "text", "fontSize": 12, "fontWeight": "bold", "dy": 14, "align": "center" },
      "encoding": {
        "x": { "field": "Year", "type": "quantitative" },
        "y": { "field": "Value", "type": "quantitative" },
        "text": { "field": "Event", "type": "nominal" },
        "color": { "field": "Player", "type": "nominal" }
      }
    },
    {
      "transform": [{ "filter": "datum.Player === 'Stephen Curry'" }],
      "mark": { "type": "text", "fontSize": 12, "fontWeight": "bold", "dy": -14, "align": "center" },
      "encoding": {
        "x": { "field": "Year", "type": "quantitative" },
        "y": { "field": "Value", "type": "quantitative" },
        "text": { "field": "Event", "type": "nominal" },
        "color": { "field": "Player", "type": "nominal" }
      }
    }
  ],
  "config": {
    "background": "#0d1117",
    "view": { "stroke": "#30363d", "strokeWidth": 1 },
    "axis": {
      "domainColor": "#30363d",
      "gridColor": "#21262d",
      "gridDash": [3, 3],
      "labelColor": "#8b949e",
      "labelFont": "monospace",
      "labelFontSize": 11,
      "titleColor": "#8b949e",
      "titleFont": "monospace",
      "titleFontSize": 13,
      "tickColor": "#30363d"
    },
    "legend": {
      "labelColor": "#c9d1d9",
      "labelFont": "monospace",
      "labelFontSize": 12,
      "titleColor": "#8b949e",
      "titleFont": "monospace",
      "symbolStrokeWidth": 3,
      "padding": 10
    },
    "range": {
      "category": ["#FDB927", "#79c0ff"]
    }
  }
};
 


const spec2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 700,
  "height": 400,
  "data": {"url": "data/Lebron_Curry.csv"},
  "transform": [
  {
    "fold": ["Points", "Rebounds", "Assists"],
    "as": ["Stat", "Value"]
  }
],
  "mark": "bar",
  "encoding": {
    "y":       { "field": "Player", "type": "nominal",      "title": null },
    "yOffset": { "field": "Stat",   "type": "nominal" },
    "x":       { "field": "Value",  "type": "quantitative", "title": null },
    "color":   { "field": "Stat",   "type": "nominal" },
    "column":  { "field": "Season", "type": "nominal" }
  },
  "title": {
    "text":       "LeBron vs. Curry: Season Stats from 2015-2023",
    "color":      "#c9d1d9",
    "font":       "monospace",
    "fontSize":   18,
    "fontWeight": "bold",
    "anchor":     "start",
    "offset":     12
  },
  "config": {
    "background": "#0d1117",
    "view": { "stroke": "#30363d", "strokeWidth": 1 },
    "axis": {
      "domainColor":   "#30363d",
      "gridColor":     "#21262d",
      "gridDash":      [3, 3],
      "labelColor":    "#8b949e",
      "labelFont":     "monospace",
      "labelFontSize": 11,
      "titleColor":    "#8b949e",
      "titleFont":     "monospace",
      "titleFontSize": 13,
      "tickColor":     "#30363d"
    },
    "legend": {
      "labelColor":        "#c9d1d9",
      "labelFont":         "monospace",
      "labelFontSize":     12,
      "titleColor":        "#8b949e",
      "titleFont":         "monospace",
      "symbolStrokeWidth": 3,
      "padding":           10
    },
    "range": {
      "category": ["#ff6b6b", "#FDB927", "#79c0ff"]  // Assists, Points, Rebounds
    }
  }
};



const spec3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 700,
  "height": 150,
  "data": { "url": "data/Lebron_Curry.csv" },
  "transform": [
    {
      "fold": ["Points", "Rebounds", "Assists"],
      "as": ["Stat", "Value"]
    }
  ],
  "mark": { "type": "line", "point": { "filled": true, "size": 60 } },
  "encoding": {
    "x":          { "field": "Season", "type": "ordinal",      "title": null },
    "y":          { "field": "Value",  "type": "quantitative", "title": null },
    "color":      { "field": "Stat",   "type": "nominal",      "scale": { "scheme": "tableau10" } },
    "strokeDash": { "field": "Player", "type": "nominal",      "legend": null },
    "row":        { "field": "Player", "type": "nominal" }
  },
  "title": {
    "text":       "LeBron vs. Curry: Stats Over Time (2015-2023)",
    "color":      "#c9d1d9",
    "font":       "monospace",
    "fontSize":   18,
    "fontWeight": "bold",
    "anchor":     "start",
    "offset":     12
  },
  "config": {
    "background": "#0d1117",
    "view": { "stroke": "#30363d", "strokeWidth": 1 },
    "axis": {
      "domainColor":   "#30363d",
      "gridColor":     "#21262d",
      "gridDash":      [3, 3],
      "labelColor":    "#8b949e",
      "labelFont":     "monospace",
      "labelFontSize": 11,
      "tickColor":     "#30363d"
    },
    "header": {
      "labelColor":      "#c9d1d9",
      "labelFont":       "monospace",
      "labelFontSize":   13,
      "labelFontWeight": "bold"
    },
    "legend": {
      "labelColor":        "#c9d1d9",
      "labelFont":         "monospace",
      "symbolStrokeWidth": 3
    }
  }
};

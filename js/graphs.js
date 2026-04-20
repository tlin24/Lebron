const sharedConfig = {
  background: "#310f79",
  view: { stroke: "#f5f5f5", strokeWidth: 1 },
  axis: {
    domainColor: "#f5f5f5",
    gridColor: "#f5f5f5",
    gridOpacity: 0.12,
    labelColor: "#f5f5f5",
    labelFont: "monospace",
    labelFontSize: 11,
    titleColor: "#f5f5f5",
    titleFont: "monospace",
    titleFontSize: 13,
    tickColor: "#f5f5f5"
  },
  legend: {
    labelColor: "#f5f5f5",
    labelFont: "monospace",
    labelFontSize: 12,
    titleColor: "#f5f5f5",
    titleFont: "monospace",
    symbolStrokeWidth: 3,
    padding: 10
  }
};

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 1200,
  height: 400,
  autosize: { type: "fit-x", contains: "padding" },

  title: {
    text: "LeBron vs. Curry: Season Stats from 2015-2023",
    color: "#ffffff",
    font: "monospace",
    fontSize: 18,
    fontWeight: "bold",
    anchor: "start",
    offset: 12
  },

  data: {
    values: [
      { Player: "LeBron James", Year: 2003, Value: 1, Event: "Drafted #1" },
      { Player: "Stephen Curry", Year: 2009, Value: 1, Event: "Drafted #7" },
      { Player: "LeBron James", Year: 2012, Value: 2, Event: "1st Championship" },
      { Player: "Stephen Curry", Year: 2015, Value: 2, Event: "1st Championship" },
      { Player: "LeBron James", Year: 2016, Value: 3, Event: "3-1 Comeback" },
      { Player: "Stephen Curry", Year: 2017, Value: 3, Event: "Warriors Dynasty" }
    ]
  },

  layer: [
    {
      mark: {
        type: "line",
        point: { filled: true, size: 90 },
        strokeWidth: 3
      },
      encoding: {
        x: {
          field: "Year",
          type: "quantitative",
          title: "Year",
          axis: { format: "d" }
        },
        y: {
          field: "Value",
          type: "quantitative",
          axis: null
        },
        color: {
          field: "Player",
          type: "nominal",
          scale: {
            domain: ["LeBron James", "Stephen Curry"],
            range: ["#d62828", "#2563eb"]
          }
        }
      }
    },
    {
      transform: [{ filter: "datum.Player === 'LeBron James'" }],
      mark: {
        type: "text",
        fontSize: 12,
        fontWeight: "bold",
        dy: 14,
        align: "center"
      },
      encoding: {
        x: { field: "Year", type: "quantitative" },
        y: { field: "Value", type: "quantitative" },
        text: { field: "Event", type: "nominal" },
        color: {
          field: "Player",
          type: "nominal",
          scale: {
            domain: ["LeBron James", "Stephen Curry"],
            range: ["#d62828", "#2563eb"]
          }
        }
      }
    },
    {
      transform: [{ filter: "datum.Player === 'Stephen Curry'" }],
      mark: {
        type: "text",
        fontSize: 12,
        fontWeight: "bold",
        dy: -14,
        align: "center"
      },
      encoding: {
        x: { field: "Year", type: "quantitative" },
        y: { field: "Value", type: "quantitative" },
        text: { field: "Event", type: "nominal" },
        color: {
          field: "Player",
          type: "nominal",
          scale: {
            domain: ["LeBron James", "Stephen Curry"],
            range: ["#d62828", "#2563eb"]
          }
        }
      }
    }
  ],

  config: sharedConfig
};

const spec2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 105,
  height: 400,
  data: { url: "data/Lebron_Curry.csv" },
  transform: [
    {
      fold: ["Points", "Rebounds", "Assists"],
      as: ["Stat", "Value"]
    }
  ],
  mark: "bar",
  encoding: {
    y: { field: "Player", type: "nominal", title: null },
    yOffset: { field: "Stat", type: "nominal" },
    x: { field: "Value", type: "quantitative", title: null },
    color: {
      field: "Stat",
      type: "nominal",
      scale: {
        domain: ["Points", "Rebounds", "Assists"],
        range: ["#d62828", "#ffffff", "#2563eb"]
      }
    },
    column: { field: "Season", type: "nominal" }
  },
  title: {
    text: "LeBron vs. Curry: Season Stats from 2015-2023",
    color: "#ffffff",
    font: "monospace",
    fontSize: 18,
    fontWeight: "bold",
    anchor: "start",
    offset: 12
  },
  config: {
    ...sharedConfig,
    header: {
      labelColor: "#ffffff",
      labelFont: "monospace",
      labelFontSize: 11,
      titleColor: "#ffffff",
      titleFont: "monospace",
      titleFontSize: 13
    }
  }
};

const spec3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: 900,
  height: 180,
  data: { url: "data/Lebron_Curry.csv" },
  transform: [
    {
      fold: ["Points", "Rebounds", "Assists"],
      as: ["Stat", "Value"]
    }
  ],
  mark: {
    type: "line",
    point: { filled: true, size: 70 },
    strokeWidth: 2.5
  },
  encoding: {
    x: { field: "Season", type: "ordinal", title: null },
    y: { field: "Value", type: "quantitative", title: null },
    color: {
      field: "Stat",
      type: "nominal",
      scale: {
        domain: ["Points", "Rebounds", "Assists"],
        range: ["#d62828", "#ffffff", "#2563eb"]
      }
    },
    strokeDash: { field: "Player", type: "nominal", legend: null },
    row: { field: "Player", type: "nominal" }
  },
  title: {
    text: "LeBron vs. Curry: Stats Over Time (2015-2023)",
    color: "#ffffff",
    font: "monospace",
    fontSize: 18,
    fontWeight: "bold",
    anchor: "start",
    offset: 12
  },
  config: {
    ...sharedConfig,
    header: {
      labelColor: "#ffffff",
      labelFont: "monospace",
      labelFontSize: 13,
      labelFontWeight: "bold",
      titleColor: "#ffffff",
      titleFont: "monospace",
      titleFontSize: 13,
      titleFontWeight: "bold"
    }
  }
};

function animateLineMarks(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const svg = container.querySelector("svg");
  if (!svg) return;

  svg.style.opacity = "1";

  const lines = container.querySelectorAll(".mark-line path");

  lines.forEach((path) => {
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = "none";

    requestAnimationFrame(() => {
      path.style.transition = "stroke-dashoffset 1.4s ease";
      path.style.strokeDashoffset = "0";
    });
  });
}

function fadeInChart(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const svg = container.querySelector("svg");
  if (!svg) return;

  svg.style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    vegaEmbed("#chart1", spec, { actions: false, renderer: "svg" }),
    vegaEmbed("#chart2", spec2, { actions: false, renderer: "svg" }),
    vegaEmbed("#chart3", spec3, { actions: false, renderer: "svg" })
  ])
    .then(() => {
      document.querySelector("#chart1")?.addEventListener("click", () => {
        animateLineMarks("#chart1");
      });

      document.querySelector("#chart2")?.addEventListener("click", () => {
        fadeInChart("#chart2");
      });

      document.querySelector("#chart3")?.addEventListener("click", () => {
        animateLineMarks("#chart3");
      });
    })
    .catch((err) => console.error(err));
});
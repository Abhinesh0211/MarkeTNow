import React, { useEffect, useRef } from "react";

const Stockchart: React.FC = () => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.canvasjs.com/canvasjs.stock.min.js";
    script.async = true;

    script.onload = () => {
      initChart();
    };

    script.onerror = () => {
      console.error("Failed to load CanvasJS library.");
    };

    document.body.appendChild(script);

    const initChart = async () => {
      const dataPoints1: any[] = [];
      const dataPoints2: any[] = [];
      const dataPoints3: any[] = [];

      try {
        const response = await fetch("https://canvasjs.com/data/docs/ltceur2018.json");
        const data = await response.json();

        data.forEach((item: any) => {
          const date = new Date(item.date);
          const open = Number(item.open);
          const high = Number(item.high);
          const low = Number(item.low);
          const close = Number(item.close);
          const volume = Number(item.volume_eur);
          const isRising = open < close;

          dataPoints1.push({
            x: date,
            y: [open, high, low, close],
            color: isRising ? "green" : "red"
          });

          dataPoints2.push({
            x: date,
            y: volume,
            color: isRising ? "green" : "red"
          });

          dataPoints3.push({
            x: date,
            y: close
          });
        });

        // @ts-ignore: CanvasJS will exist after script loads
        chartRef.current = new window.CanvasJS.StockChart("chartContainer", {
          exportEnabled: true,
          theme: "light2",
          title: {
            text: "StockChart with Tooltip & Crosshair Syncing"
          },
          charts: [
            {
              toolTip: { shared: true },
              axisX: {
                lineThickness: 5,
                tickLength: 0,
                labelFormatter: () => "",
                crosshair: {
                  enabled: true,
                  snapToDataPoint: true,
                  labelFormatter: () => ""
                }
              },
              axisY2: {
                title: "Litecoin Price",
                prefix: "€"
              },
              legend: {
                verticalAlign: "top",
                horizontalAlign: "left"
              },
              data: [
                {
                  name: "Price (in EUR)",
                  yValueFormatString: "€#,###.##",
                  axisYType: "secondary",
                  type: "candlestick",
                  risingColor: "green",
                  fallingColor: "red",
                  dataPoints: dataPoints1
                }
              ]
            },
            {
              height: 100,
              toolTip: { shared: true },
              axisX: {
                crosshair: {
                  enabled: true,
                  snapToDataPoint: true
                }
              },
              axisY2: {
                prefix: "€",
                title: "LTC/EUR"
              },
              legend: {
                horizontalAlign: "left"
              },
              data: [
                {
                  yValueFormatString: "€#,###.##",
                  axisYType: "secondary",
                  name: "LTC/EUR",
                  dataPoints: dataPoints2
                }
              ]
            }
          ],
          navigator: {
            data: [{ color: "grey", dataPoints: dataPoints3 }],
            slider: {
              minimum: new Date(2018, 6, 1),
              maximum: new Date(2018, 8, 1)
            }
          }
        });

        chartRef.current.render();
      } catch (error) {
        console.error("Failed to fetch chart data:", error);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="chartContainer" style={{ height: "400px", width: "100%" }} />;
};

export default Stockchart;

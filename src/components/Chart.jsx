import "./Chart.css";
import ChartItem from "./ChartItem";

const Chart = ({ expensesData }) => {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of expensesData) {
    chartData[expense.date.getMonth()].value += expense.price;
  }
  const max = Math.max(...chartData.map((item) => item.value));
  // console.log(max);
  //   console.log(chartData);
  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartItem
            key={item.label}
            label={item.label}
            value={item.value}
            maxValue={max}
          />
        );
      })}
    </div>
  );
};

export default Chart;

import { Card, Title, LineChart } from "@tremor/react";
import { styled } from "styled-components";

const chartdata = [
  {
    year: "Julio",
    Todos: 32322,
    "DiDi Rides": 23244,
    "DiDi Foods": 18212,
  },
  {
    year: "Agosto",
    Todos: 42322,
    "DiDi Rides": 23244,
    "DiDi Foods": 12212,
  },
  {
    year: "Septiembre",
    Todos: 22322,
    "DiDi Rides": 1744,
    "DiDi Foods": 512,
  },
  {
    year: "Octubre",
    Todos: 45322,
    "DiDi Rides": 33244,
    "DiDi Foods": 22212,
  },
  {
    year: "Noviembre",
    Todos: 41322,
    "DiDi Rides": 33244,
    "DiDi Foods": 12212,
  },
  {
    year: "Diciembre",
    Todos: 22322,
    "DiDi Rides": 13244,
    "DiDi Foods": 6212,
  },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export const LineChartComponent = ({ title = "" }) => (
  <Card>
    <Title className="ml-2 mt-2 mb-[-24px]">{title}</Title>
    <LineChart
      className="mt-6"
      data={chartdata}
      index="year"
      categories={["Todos", "DiDi Foods", "DiDi Rides"]}
      colors={["orange", "amber", "slate"]}
      valueFormatter={dataFormatter}
      yAxisWidth={40}
    />
  </Card>
);

export default LineChartComponent;

const Container = styled.div`
  background-color: #fff;
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  max-width: 810px;
`;

import { Card, Title, BarChart, Text } from "@tremor/react";

const chartdata2 = [
  {
    name: "Enero",
    Todo: 1232338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Febrero",
    Todo: 1032338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Marzo",
    Todo: 1532338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Abril",
    Todo: 1132338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Mayo",
    Todo: 1832338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Junio",
    Todo: 1732338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Julio",
    Todo: 1262338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Agosto",
    Todo: 1922338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Septiembre",
    Todo: 1222338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Octubre",
    Todo: 1232338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Noviembre",
    Todo: 1232338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
  {
    name: "Diciembre",
    Todo: 1232338,
    "DiDi Foods": 543034,
    "DiDi Rides": 723232,
  },
];

const dataFormatter = (number) => {
  return " " + Intl.NumberFormat("us").format(number).toString();
};

export const BarChartComponent = () => (
  <Card>
    <Text className="ml-2">Generados en 2023</Text>
    <Title className="text-2xl ml-2 font-bold ">12,232,292 certificados</Title>
    <BarChart
      data={chartdata2}
      index="name"
      categories={["Todo", "DiDi Foods", "DiDi Rides"]}
      colors={["orange", "amber", "slate"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  </Card>
);

export default BarChartComponent;

import { JSX } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { useAppSelector } from '../../shared/hooks/hooks'
import { selectHistoryArray } from '../../shared/redux/slices/currenciesSlice'
import './historyGraphStyle.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export const HistoryGraph = (): JSX.Element => {
  const data = useAppSelector(selectHistoryArray)

  const labels = data.map((item) => {
    const date = new Date(item.date)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${day}.${month} ${hours}:${minutes}`
  })

  const prices = data.map((item) => item.priceUsd)

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Цена (USD)',
        data: prices,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className="graphContainer">
      <Line data={chartData} options={options} />
    </div>
  )
}

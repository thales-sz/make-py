import { type ApexOptions } from 'apexcharts'
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const options: ApexOptions = {
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left'
  },
  colors: ['#03062C', '#D7E6FA'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1
    },
    toolbar: {
      show: false
    }
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300
        }
      }
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350
        }
      }
    }
  ],
  stroke: {
    width: [1, 2],
    curve: 'smooth'
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#03062C', '#D7E6FA'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5
    }
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ],
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    title: {
      text: 'Em reais',
      style: {
        fontSize: '20px'
      }
    },
    min: 0,
    max: 10000
  }
}

interface State {
  options: ApexOptions
  series: Array<{
    name: string
    data: number[]
  }>
}

function Graph (): JSX.Element {
  const [state] = useState<State>({
    options,
    series: [
      {
        name: 'Lucro Total',
        data: [2300, 1100, 2200, 2700, 1300, 2200, 3700, 2100, 4400, 2200, 3000, 4500]
      },

      {
        name: 'Receita Mensal',
        data: [3000, 2500, 3600, 3000, 4500, 3500, 6400, 5200, 5900, 3600, 3900, 5100]
      }
    ]
  })

  return (
    <div className="col-span-12 border border-slate-300 bg-slate-50 px-5 pt-7.5 pb-5 shadow-default sm:px-7.5 max-sm:w-full md:w-full lg:w-1/2 xl:col-span-8 rounded-lg shadow-lg mt-5 w-1/2">
      <h1 className='text-2xl font-semibold my-2'>Gráfico (Receita e Lucro)</h1>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  )
}

export default Graph

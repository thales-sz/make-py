import { type ApexOptions } from 'apexcharts'
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const options: ApexOptions = {
  legend: {
    show: false,
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
    width: [2, 2],
    curve: 'straight'
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
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

interface ChartOneState {
  series: Array<{
    name: string
    data: number[]
  }>
}

const Graph: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
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
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3">
          <div className="flex">
            <span className="mt-1 mr-2 flex h-4 w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-3 w-3 rounded-full bg-slate-300" />
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Receita Total</p>
            </div>
          </div>
          <div className="flex">
            <span className="mt-1 mr-2 flex h-4 w-4 max-w-4 items-center justify-center rounded-full border border-slate-300">
              <span className="block h-3 w-3 rounded-full  bg-slate-700" />
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Lucro</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow hover:bg-white hover:shadow-card"
              onClick={() => { setState(state) }}
              >
              Diário
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow">
              Mensal
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow">
              Anual
            </button>
          </div>
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
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

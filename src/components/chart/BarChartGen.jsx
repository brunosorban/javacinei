import './barchartgen.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarChartGen({title, data, dataKey, grid}) {
  return (
      <div className='barChart'>
          <h3 className="chartTitle">{title}</h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
              <BarChart data={data}>
                  <XAxis dataKey="name" stroke='#5550bd'/>
                  <YAxis />
                  <Bar dataKey={dataKey} fill="#8884d8" />
                  <Tooltip/>
                  {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5 '/>}
              </BarChart>
          </ResponsiveContainer>
      </div>
  )
}
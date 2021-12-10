import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import BarChartGen from "../../components/chart/BarChartGen"

export default function Home({data, total_vacinei, total_agendamentos, agendamentos_mes, grafico}) { 
    return (
        <div className="home">
            <FeaturedInfo total_vacinei={total_vacinei} total_agendamentos={total_agendamentos} 
            agendamentos_mes={agendamentos_mes}/>
            <div className="graphs">
                <Chart data={grafico} title="Agendamentos mensais em 2021" grid dataKey="Soma"/>
                <BarChartGen data={data} xDataKey="nome" title="Vacinas em estoque" grid dataKey="quantidade"/>
            </div>
        </div>
    )
}


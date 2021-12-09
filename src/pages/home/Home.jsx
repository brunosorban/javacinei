import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import {userData} from "../../tempData"
import BarChartGen from "../../components/chart/BarChartGen"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <div className="graphs">
                <Chart data={userData} title="Agendamentos diários" grid dataKey="Active User"/>
                <BarChartGen data={userData} title="Vacinas em estoque" grid dataKey="Active User"/>
            </div>
            
        </div>
    )
}


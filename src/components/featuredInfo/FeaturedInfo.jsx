import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Vacinas Aplicadas (no mês)</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'> 245 </span>
                    <span className='featuredMoneyRate'>11 <ArrowUpward className='featuredIcon' /></span>
                </div>
                <span className="featuredSub">Em relação ao mês passado</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Total de vacinas agendadas</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'> 363</span>
                    <span className='featuredMoneyRate'>12 <ArrowDownward className='featuredIconNegative'/></span>
                </div>
                <span className="featuredSub">Em relação ao mês passado</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Total de Vacinas aplicadas</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'> 3000</span>
                    <span className='featuredMoneyRate'>11 <ArrowUpward className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Desde o início da plataforma</span>
            </div>
        </div>
    )
}

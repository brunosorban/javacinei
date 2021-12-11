import './featuredInfo.css'

export default function FeaturedInfo({total_vacinei, total_agendamentos, agendamentos_mes}) {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Vacinas aplicadas (no mês)</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'> {agendamentos_mes} </span>
                </div>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Total de vacinas agendadas</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'> {total_agendamentos} </span>
                </div>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Total de vacinas aplicadas</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'> {total_vacinei} </span>
                </div>
            </div>
        </div>
    )
}

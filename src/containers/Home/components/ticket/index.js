
import './ticket.css';
import Row from './components/row';

const Ticket = ({ item }) => {
    return (
        <div className='wrapper'>
            <div className='ticket'>
                <div className='ticket__head'>
                <h2>{(item.price).toLocaleString('ru')} Р</h2>
                    <div className='ticket__logo'></div>
                </div>
                <div className='ticket__list'>
                    <div className='ticket__item--from'>
                        <Row segments={item.segments[0]}/>
                    </div>
                    <div className='ticket__item--to'>
                        <Row segments={item.segments[1]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
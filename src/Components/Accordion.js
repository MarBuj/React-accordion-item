import '../Sass/Accordion.scss';
import PropTypes from 'prop-types';
import { ReactComponent as CheckIcon } from '../Assets/Radio.svg';
import { useRef } from 'react';

const Accordion = ({ id, title, checklist, selected, toggle }) => {

    const contentRef = useRef();

    return (
        <div className='accordion'>
                <div className={selected === id ? 'accordion__title accordion__title--active' : 'accordion__title accordion__title--pasive'} onClick={() => toggle(id)}>
                    <div className='accordion__number'>{id}</div>
                    <h2>{title}</h2>
                </div>
                <div className='accordion__content' ref={contentRef} style={ selected === id ? { height: contentRef.current.scrollHeight + 'px' } : { height: '0px' }}>
                    {checklist.map((item) => (
                        <div className='accordion__checklistItem'>
                            <CheckIcon />
                            <h5>{item}</h5>
                        </div>
                    ))}
                </div>
        </div>
    );
}
 
Accordion.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    checklist: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.oneOf([null, 1, 2, 3, 4]),
    toggle: PropTypes.func.isRequired
}

export default Accordion;
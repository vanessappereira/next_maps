import * as React from 'react';
import imgLogo from '../../images/logo.png'
import imgSearch from '../../images/search.png'
import {
    DivNavbar,
    DivLogo,
    DivSearch,
    H1,
    Input,
    DivInstructions,
    InstrPopup,
    DivContact,
} from './navbarElements';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import './styles.css'

function Box() {
    return (
        <>
            <InstrPopup>
                <h1>Instruções:</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lacinia nisl. Aliquam quis turpis sit amet nisl accumsan tincidunt. Duis pulvinar tincidunt tellus id facilisis. Nullam sodales sem id vulputate hendrerit. Integer vel dui et lectus posuere volutpat suscipit ac mauris. Sed bibendum vestibulum finibus.</p>

            </InstrPopup>
        </>
        // <DivPopUp className='box-outer'>
        //     <div className='box-content'>
        //         <span className="close">&times;</span>
        //         <h2>Instruções</h2>
        // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lacinia nisl. Aliquam quis turpis sit amet nisl accumsan tincidunt. Duis pulvinar tincidunt tellus id facilisis. Nullam sodales sem id vulputate hendrerit. Integer vel dui et lectus posuere volutpat suscipit ac mauris. Sed bibendum vestibulum finibus.</p>
        //     </div>
        // </DivPopUp>
    );
}
const Navbar = () => {
    const [value, setValue] = React.useState('');
    const [inputBoxCoord, setInputBoxCoord] = React.useState(false);
    const [inputBoxAdrr, setInputBoxAdrr] = React.useState(false);

    // var [lat, setLat] = React.useState('');
    // var [lng, setLng] = React.useState('');

    const options = [
        { label: 'Coordenadas', value: 'coord' },
        { label: 'Morada', value: 'morada' },
    ];

    const handleChangeSelection = (e) => {
        setValue(e.target.value);

        if (e.target.value === '') {
            setInputBoxCoord(false)
            setInputBoxAdrr(false)
        }
        if (e.target.value === 'morada') {
            setInputBoxAdrr(true)
            setInputBoxCoord(false)
        }
        if (e.target.value === 'coord') {
            setInputBoxCoord(true)
            setInputBoxAdrr(false)
        }

    };

    return (
        <>
            <DivNavbar className='flex items-center '>

                <DivLogo className='order-1'>
                    <img src={imgLogo} alt="logo" />
                </DivLogo>

                <DivSearch className='search'>
                        <H1>Procurar por: </H1>
                        <label className='space-x-2'>
                            <select value={value} onChange={handleChangeSelection}>
                                <option value={''}></option>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </label>

                    {inputBoxCoord ?
                            <form className='coordInsert'>
                                <label>
                                    <Input type="number" name="lat" placeholder='Latitude' />
                                    <Input type="number" name="lng" placeholder='Longitude' />
                                    <Input type="submit" name="submit" />
                                </label>
                            </form>

                        : null}
                        
                    {inputBoxAdrr ?                
                            <form className='addrInsert'>
                                <label>
                                    <Input type="text" size="50" name="address" placeholder='Morada' />
                                    <Input type="submit" name="submit" src={imgSearch} />
                                </label>
                            </form>
                       : null}
                </DivSearch>

                <DivInstructions className='instructions' >
                    <Popup
                        trigger={<button> Como Funciona</button>}
                        position="bottom">
                        <Box />
                    </Popup>
                </DivInstructions>

                <DivContact className='order-last contact'>
                    <a href="https://helica.pt" target="_blank" rel="noreferrer">Conheça a Helica</a>
                </DivContact>

            </DivNavbar>
        </>
    );
}

export default Navbar;
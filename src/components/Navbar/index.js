import * as React from 'react';
import imgLogo from '../../images/logo.png';
import {
    DivNavbar,
    DivLogo,
    DivSearch,
    H1,
    Input,
    DivInstructions,
    DivContact,
} from './navbarElements';
import 'reactjs-popup/dist/index.css';
import Instructions from '../Instructions/index';

const Navbar = () => {
    const [value, setValue] = React.useState('');
    const [inputBoxCoord, setInputBoxCoord] = React.useState(true);
    const [inputBoxAdrr, setInputBoxAdrr] = React.useState(false);

    const options = [
        { label: 'Coordenadas', value: 'coord' },
        { label: 'Morada', value: 'morada' },
    ];

    const handleChangeSelection = (e) => {
        setValue(e.target.value);

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

                <DivLogo>
                    <img src={imgLogo} alt="logo" />
                </DivLogo>

                <DivSearch className='search'>
                    <div className='title'>
                        <H1>Procurar por: </H1>
                    </div>
                    <div className='insertion'>
                        {inputBoxCoord ?
                            <form className='coordInsert'>
                                <label>
                                    <Input type="number" name="lat" placeholder='Latitude' />
                                    <Input type="number" name="lng" placeholder='Longitude' />
                                    <button type="submit" name="submit"> Pesquisar </button>
                                </label>
                            </form>
                            : null}

                        {inputBoxAdrr ?
                            <form className='addrInsert'>
                                <label>
                                    <Input type="text" size="30" name="address" placeholder='Morada' />
                                    <button  className=" submit" type="submit" > Pesquisar </button>
                                </label>
                            </form>
                            : null}
                    </div>
                    <div className='selector'>
                        <label>
                            <select value={value} onChange={handleChangeSelection}>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </DivSearch>

                <DivInstructions>
                    <Instructions />
                </DivInstructions>

                <DivContact className='order-last contact '>
                    <button type="button" >
                        <a href="https://helica.pt" target="_blank" rel="noreferrer">Conheça a Helica</a>
                    </button>
                </DivContact>

            </DivNavbar>

        </>
    );
}

export default Navbar;
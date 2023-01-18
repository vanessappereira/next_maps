import * as React from 'react';
import Instruct from '../Instructions/index';
import {
    DivNavbar,
    DivLogo,
    DivSearch,
    H1,
    Input,
    DivInsert,
    LabelCoord,
    LabelAddr,
    InputAddr,
    SelectOption,
    Button,
    DivInstructions,
    DivContact,
} from './navbarElements';

// Css:
import 'reactjs-popup/dist/index.css';
import '../Instructions/Overlay.css';
import './styles.css';
//images
import imgLogo from '../../images/logo.png';
import imgSearch from '../../images/search_icon.svg';


const Navbar = () => {
    const [value, setValue] = React.useState('');
    const [inputBoxCoord, setInputBoxCoord] = React.useState(true);
    const [inputBoxAdrr, setInputBoxAdrr] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);

    const options = [
        { id: 1, label: 'Coordenadas', value: 'coord' },
        { id: 2, label: 'Morada', value: 'morada' },
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
    const handleOpenInstruct = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <DivNavbar className='flex-auto'>
                {/* LOGO */}
                <DivLogo>
                    <img src={imgLogo} alt="logo" />
                </DivLogo>
                {/* SEARCH BAR */}
                <DivSearch className='search'>
                    <div className='title'>
                        <H1>Procurar por: </H1>
                    </div>
                    <DivInsert>
                        {inputBoxCoord ?
                            <form className='coordInsert'>
                                <LabelCoord>
                                    <Input type="number" name="lat" placeholder=' Latitude' />
                                    <Input type="number" name="lng" placeholder=' Longitude' />
                                    <Button type="submit btn" name="submit" id="search-button">
                                        <embed src={imgSearch} />
                                    </Button>
                                </LabelCoord>
                            </form>
                            : null}
                        {inputBoxAdrr ?
                            <form className='addrInsert'>
                                <LabelAddr>
                                    <InputAddr type="text" name="address" placeholder=' Morada' />
                                    <Button type="submit" name="submit" id="search-button">
                                        <embed src={imgSearch} />
                                    </Button>
                                </LabelAddr>
                            </form>
                            : null}
                    </DivInsert>
                    {/* SELECTOR */}
                    <SelectOption>
                        <label>
                            <select value={value} onChange={handleChangeSelection}>
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </label>
                    </SelectOption>
                </DivSearch>

                {/* How to */}
                <DivInstructions>
                    <DivInsert>
                        <button type="button" onClick={handleOpenInstruct}>
                            Como Funciona
                        </button>
                    </DivInsert>
                    {/* <Instructions /> not used, this has a modal*/}
                </DivInstructions>

                {/* HELICA WEBPAGE */}
                <DivContact className='order-last contact '>
                    <button type="button" >
                        <a href="https://helica.pt" target="_blank" rel="noreferrer">Conheça a Helica</a>
                    </button>
                </DivContact>
            </DivNavbar>
            {showModal ? <Instruct /> : null}
        </>
    );
}

export default Navbar;
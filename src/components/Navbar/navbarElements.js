import styled from "styled-components";

export const DivNavbar = styled.div`
    display: flex;
    position: static;
    align-content: stretch;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
    `
export const DivLogo = styled.div`
    display: flex;
    order: 1;

    `
export const DivSearch = styled.div`
    display: flex;
    order: 2;
    justify-content: space-evenly;
    color: rgb(10, 16, 151);
    align-items: center;
    @media screen and (max-width: 768px) {
        order: 4;
       margin-top: 15px;
    }
    `
export const H1 = styled.h1`
    font-weight: bold;
    @media screen and (max-width: 768px) {
        margin-left: 5px;
    }
    `
export const DivInsert = styled.div`
display:flex;

    `
export const LabelCoord = styled.label`
    display:flex;
    margin-left: 5px;
    justify-content: space-evenly
    `
export const Input = styled.input`
    width: 40%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    `
export const LabelAddr = styled.label`
    display:flex;
    align-item: center;
    justify-content: space-evenly  
    @media screen and (max-width: 768px) {
        resize: horizontal;
        width: 100px;
    }  
`
export const InputAddr = styled.input`
    
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        resize: horizontal;
        width: 100px;
    }
    `
export const Button = styled.button`
    display:flex;
    align-item: center;
    `
export const SelectOption = styled.div`
    margin-left: 5px;    
    margin-right: 10px;
    @media screen and (max-width: 768px) {
        margin-right: 15px;
    }
    `
export const DivInstructions = styled.div`
    display: flex;
    position: static;
    order: 3;
    align-content: stretch;
    justify-content: space-evenly;
    margin-right: 10px;
    @media screen and (max-width: 768px) {
        order: 2;        
    }
    `
export const DivContact = styled.div`
    display: flex;
    position: static;
    align-content: stretch;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
        order: 3;        
    }
    `

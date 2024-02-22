import { styled } from "@mui/material";

const ModalBody = styled('div')`
    background-color: #fff;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.1), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
    padding: 32px;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ButtonsWrapper = styled('div')`
    display: flex;
    justify-content: start;
    gap: 20px;
`

export default {
    ModalBody,
    ButtonsWrapper,
}
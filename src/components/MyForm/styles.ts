import styled from "@emotion/styled";

const MyFormWrapper = styled('div')`
    background-color: #fff;
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ControllersWrapper = styled('div')`
    display: flex;
    gap: 20px;
`;

const SubmitButtonWrapper = styled('div')`
    display: flex;
    justify-content: center;
`

const Form = styled('form')`
    margin-top: 80px;
`

export default {
    MyFormWrapper,
    ControllersWrapper,
    SubmitButtonWrapper,
    Form,
}



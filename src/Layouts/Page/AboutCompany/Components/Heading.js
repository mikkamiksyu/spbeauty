import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
import styled from 'styled-components';
const Option = styled.div`
`;
/*outline: none;
border-radius: 24px;
border: solid #E2E8F0 1px;
background-color: #F8FAFC;
color: #0F172A;*/

function Heading() {
    return (
        <div className='d-flex flex-row justify-content-between mt-5'>
            <h1 className='large-title'>Данные о компании</h1>
            <SecondaryButton>Закрыть запись</SecondaryButton>
        </div>
    );
}

export default Heading;
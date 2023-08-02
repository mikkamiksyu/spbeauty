import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from "styled-components";

const Option = styled.div`
border:3px solid #F8FAFC;
border-radius: 8px;
padding: 24px
`;

const Option2 = styled.div`
padding: 24px 0px 24px 0px
`;
const Option3 = styled.div`
padding-top: 178px
`;

function Addresses() {
    return (
        <Option className='d-inline-flex flex-column gap-2 mt-4'>
            <div className='text-rg'>Адреса заведений</div>
            <Option2 className='d-inline-flex flex-column gap-3'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </Option2>
                    <Option3><SecondaryButton className='btn'>Добавить филиал</SecondaryButton></Option3>

        </Option>
    );
}

export default Addresses;
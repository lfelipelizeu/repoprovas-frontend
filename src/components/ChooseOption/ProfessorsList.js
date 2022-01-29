import Option from './Option';

export default function ProfessorsList({ optionsList }) {
    return (
        <>
            {optionsList?.map((option, index) =>
                <Option
                    key={index}
                    option={option}
                    searchBy={'professor'}
                />
            )}
        </>
    );
}
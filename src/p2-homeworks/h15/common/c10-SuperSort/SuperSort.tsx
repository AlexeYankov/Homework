import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// добавить в проект иконки и импортировать
const downIcon = <KeyboardArrowDownIcon />;
const upIcon = <KeyboardArrowUpIcon />;
const noneIcon = "[--]";

export type SuperSortPropsType = {
    id?: string;
    sort: string;
    value: string;
    onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === "" || sort === down) {
        sort = up;
    } else if (sort === up) {
        console.log(3);
        sort = down;
    } else {
        sort = down;
    }
    return sort; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({sort, value, onChange, id = "hw15"}) => {
    const up = "0" + value;
    const down = "1" + value;
    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up));
    };

    const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

    return (
        <span id={id + "-sort-" + value} onClick={onChangeCallback}>
            {/*сделать иконку*/}
            {icon}

            {/* {icon} */}
        </span>
    );
};

export default SuperSort;

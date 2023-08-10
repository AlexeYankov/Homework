import React from "react";
import SuperSelect from "../../../h7/common/c5-SuperSelect/SuperSelect";
import {Pagination} from "@mui/material";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
    id?: string;
    page: number;
    itemsCountForPage: number;
    totalCount: number;
    onChange: (page: number, count: number) => void;
    disabled: boolean;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
    disabled,
    page,
    itemsCountForPage,
    totalCount,
    onChange,
    id = "hw15",
}) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage); // пишет студент // вычислить количество страниц
    // console.log(lastPage, totalCount, itemsCountForPage);
    const onChangeCallback = (event: any, page: number) => {
        // console.log("chenge", page);
        event && onChange(page, itemsCountForPage);
        // пишет студент
    };

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        event && onChange(page, +event.currentTarget.value);
        console.log("select", event.currentTarget.value);
    };

    return (
        <div className={s.pagination}>
            <div className={s.paginationPages}>
                <Pagination
                    id={id + "-pagination"}
                    color="primary"
                    shape="rounded"
                    size="small"
                    sx={
                        {
                            //    height: 10px // стили для Pagination // пишет студент
                        }
                    }
                    page={page}
                    count={lastPage}
                    onChange={onChangeCallback}
                    hideNextButton
                    hidePrevButton
                    disabled={disabled}
                />
            </div>
                <span className={s.text1}>Показать</span>

                <SuperSelect
                    className={s.select}
                    disabled={disabled}
                    id={id + "-pagination-select"}
                    value={itemsCountForPage}
                    options={[
                        {id: 4, value: 4},
                        {id: 7, value: 7},
                        {id: 10, value: 10},
                    ].map((el) => `${el.value}`)}
                    onChange={onChangeSelect}
                />

                <span className={s.text2}>строки в таблице</span>
        </div>
    );
};

export default SuperPagination;

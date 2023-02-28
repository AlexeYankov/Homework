import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeC } from "./bll/themeReducer";
import s from "./HW12.module.css";

export const themes = ["dark", "red", "some"];

function HW12() {
  const dispatch = useDispatch();
  const theme: any = useSelector<AppStoreType>((state)=>state.theme); // useSelector
  let themeValue = theme.themes
    const changeTheme = (el: string) => {
        dispatch(changeThemeC(el));
    }
  return (
    <div className={s[themeValue]}>
    
      <hr />
      <span className={s[theme + "-text"]}>homeworks 12</span>
      <div style={{marginTop: "20px"}}>
        <SuperRadio options={themes} value={themeValue} onChangeOption={(el)=>changeTheme(el)}/>
      </div>
      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr />
    </div>
  );
}

export default HW12;

import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from "./bll/loading.module.css";
import s2 from "../../p1-main/m1-ui/u1-app/App.module.css";
import pic from "./bll/gooey-balls-2.svg";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>((state) => state.loading);

    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC());
        const b = () => dispatch(loadingAC());
        setTimeout(b, 5000);
    };
    return (
        <div id={"hw10"}>
            <div className={s2.hwTitle}>Hometask № 10</div>
            <hr />
            <div className={s2.hw}>
                {loading ? (
                    <div id={"hw10-loading"}>
                        <div className={s.center}>
                            <img className={s.ring} src={pic} alt="loading" />
                            <span className={s.span1}>loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className={s.buttons}>
                        <SuperButton id={"hw10-button-start-loading"} onClick={setLoading}>
                            set loading...
                        </SuperButton>
                    </div>
                )}
            </div>
            <hr />
        </div>
    );
}

export default HW10;

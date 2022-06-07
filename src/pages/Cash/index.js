import React, { useEffect, useState } from "react";

//Components
import { CashForm } from "@components/Forms";

//Styles
import "./Cash.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import router from "../../utils/router";
import TwoFACode from "../../components/Modals/TwoFACode";
import { cashUsd } from "../../store/payment/pay.api";
import MessageBox from "../../components/MessageBox";

const Cash = () => {
    const [error, setError] = useState(false);
    const [data, setData] = useState("");
    const [code, setCode] = useState("");

    const dispatch = useDispatch();

    const { isTraider } = useSelector((state) => state.user);
    const { message, loaded, complete } = useSelector((state) => state.pay);

    const handleOtp = (token) => {
        setCode(token);
        const obj = {
            amount: data.sum,
            address: data.card_number,
            two_fa_otp: token,
        };
        dispatch(cashUsd(obj));
        setError("");
    };

    useEffect(() => {
        if (message) {
            setError(true);
        }
    }, [message]);

    const cashFetch = (data) => {
        const obj = {
            amount: data.sum,
            address: data.card_number,
        };
        dispatch(cashUsd(obj));
    };

    return (
        <div className="main">
            <div className="main__header">
                <div className="main__header__title">
                    <Link
                        to={
                            isTraider
                                ? router.traider_page
                                : router.investor_page
                        }
                    >
                        <div className="main__header__title__back"></div>
                    </Link>
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.8"
                            d="M22.5 15.5H18L16.5 18.5H7.5L6 15.5H1.5C0.65625 15.5 0 16.2031 0 17V22.25C0 23.5156 0.984375 24.5 2.25 24.5H21.75C22.9688 24.5 24 23.5156 24 22.25V17C24 16.2031 23.2969 15.5 22.5 15.5ZM8.53125 7.57812L10.5 5.65625V14C10.5 14.8438 11.1562 15.5 12 15.5C12.7969 15.5 13.5 14.8438 13.5 14V5.65625L15.4219 7.57812C15.7031 7.85938 16.0781 8 16.5 8C16.875 8 17.25 7.85938 17.5312 7.57812C18.1406 7.01562 18.1406 6.03125 17.5312 5.46875L13.0312 0.96875C12.4688 0.359375 11.4844 0.359375 10.9219 0.96875L6.42188 5.46875C5.8125 6.03125 5.8125 7.01562 6.42188 7.57812C6.98438 8.1875 7.96875 8.1875 8.53125 7.57812Z"
                            fill="#09090E"
                        />
                    </svg>

                    <span>Вывод</span>
                </div>
            </div>
            <div className="main__cash_content">
                <CashForm fetchData={cashFetch} loaded={loaded} />
            </div>
            {error && message
                ? Object.values(message).map((e) => (
                      <MessageBox message={e[0]} error={true} />
                  ))
                : null}
            {complete ? <MessageBox message={complete} error={false} /> : null}
            {message?.message &&
                message?.message[0] === "Введите код Google authenticator" && (
                    <TwoFACode handleChange={handleOtp} />
                )}
        </div>
    );
};

export default Cash;

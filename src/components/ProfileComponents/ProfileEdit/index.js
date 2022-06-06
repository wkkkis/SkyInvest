import React, { useEffect, useMemo, useRef, useState } from "react";

//Form
import { useForm } from "react-hook-form";

//Field
import Field from "@components/Field";

//Components
import Button from "@components/Button";
import SpinnerLoad from "@components/SpinnerLoad";
import Select from "@components/Select";
import UserInfoBlock from "@components/UI/UserInfoBlock";
import { useDispatch, useSelector } from "react-redux";
import { useValidator } from "../../../hooks/useValidator";
import { editUser } from "../../../store/user/user.api";

const ProfileEdit = () => {
    const dispatch = useDispatch();
    const { user, loaded } = useSelector((state) => state.user);
    const [name, setName] = useState(user?.first_name);
    const [lastname, setLastname] = useState(user?.last_name);
    const [email, setEmail] = useState(user?.email);
    const [phone, setPhone] = useState(user?.phone_number);

    useEffect(() => {
        if (user) {
            setName(user.first_name);
            setLastname(user.last_name);
            setEmail(user.email);
            setPhone(user.phone_number);
        }
    }, [user]);

    const {
        setError,
        errorData: { fields, error },
        ...validator
    } = useValidator();

    let btnRef = useRef([]);

    const registerHandler = async (e) => {
        e.preventDefault();

        if (!validator.isPhoneValid(phone)) {
            return;
        }
        if (!validator.isEmailValid(email)) {
            return;
        }
        if (!validator.isFirstNameValid(name)) {
            return;
        }
        if (!validator.isSecondNameValid(lastname)) {
            return;
        }

        const body = {
            email,
            first_name: name,
            last_name: lastname,
            phone_number: phone,
        };

        dispatch(editUser(body));
    };

    return user ? (
        <div className="main">
            <div className="main__title">
                <span>Профиль</span>
            </div>
            <div className="main__content">
                <UserInfoBlock
                    email={user.email}
                    name={`${user.first_name} ${user.last_name}`}
                    logo="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                />
                <form
                    onSubmit={(e) => registerHandler(e)}
                    className="main__content__form"
                    noValidate
                    autoComplete="off"
                >
                    <div className="main__content__form__name">
                        <Field
                            label="Имя"
                            value={name}
                            error={fields.firstName && error}
                            onChange={(e) => {
                                validator.isFirstNameValid(e.target.value);
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="main__content__form__lastname">
                        <Field
                            label="Фамилия"
                            value={lastname}
                            error={fields.secondName && error}
                            onChange={(e) => {
                                validator.isSecondNameValid(e.target.value);
                                setLastname(e.target.value);
                            }}
                        />
                    </div>
                    <div className="main__content__form__email">
                        <Field
                            label="Email"
                            value={email}
                            error={fields.email && error}
                            onChange={(e) => {
                                validator.isEmailValid(e.target.value);
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="main__content__form__phone">
                        <Field
                            label="Телефон"
                            value={phone}
                            error={fields.phone && error}
                            onChange={(e) => {
                                validator.isPhoneValid(e.target.value);
                                setPhone(e.target.value);
                            }}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="googleauth_edit__button"
                        theme="beforesubmit"
                    >
                        {loaded ? (
                            <SpinnerLoad />
                        ) : (
                            <>
                                <svg
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.7148 2.80469L10.418 0.507812C10.2266 0.316406 9.81641 0.125 9.51562 0.125H2.625C1.64062 0.125 0.875 0.917969 0.875 1.875V10.625C0.875 11.6094 1.64062 12.375 2.625 12.375H11.375C12.332 12.375 13.125 11.6094 13.125 10.625V3.73438C13.125 3.43359 12.9336 3.02344 12.7148 2.80469ZM7 10.625C6.01562 10.625 5.25 9.85938 5.25 8.875C5.25 7.91797 6.01562 7.125 7 7.125C7.95703 7.125 8.75 7.91797 8.75 8.875C8.75 9.85938 7.95703 10.625 7 10.625ZM9.625 4.9375C9.625 5.18359 9.40625 5.375 9.1875 5.375H3.0625C2.81641 5.375 2.625 5.18359 2.625 4.9375V2.3125C2.625 2.09375 2.81641 1.875 3.0625 1.875H9.1875C9.40625 1.875 9.625 2.09375 9.625 2.3125V4.9375Z"
                                        fill="#FDFDFE"
                                    />
                                </svg>

                                <span>Сохранить</span>
                            </>
                        )}
                    </Button>
                </form>
            </div>
        </div>
    ) : (
        <div className="main">
            <SpinnerLoad />
        </div>
    );
};

export default ProfileEdit;

import React, { useEffect, useState } from "react";

//Icons
import faqIcon from "@assets/img/faq.svg";

//Components
import Button from "@components/Button";
import {
    EditPhone,
    ForgotPassword,
    Logout,
    NoCodeMessage,
    NoEmailPhone,
    Signin,
    Signup,
    TwoFactor,
    VerifyPerson,
} from "@components/FaqComponents";
import Footer from "@components/Footer";

//Styles
import "./FAQ.scss";
import { getFaq } from "../../../store/main/main.api";
import { useDispatch, useSelector } from "react-redux";

const FAQ = () => {
    const [faqTab, setFaqTab] = useState(1);
    const [faqQues, setFaqQues] = useState();
    const [faqAnswer, setFaqAnswer] = useState();

    const dispatch = useDispatch();
    const { bunner, faq } = useSelector((state) => state.main);

    useEffect(() => {
        dispatch(getFaq());
    }, []);

    const toggleFaqTab = (tab) => {
        if (faqTab === tab) {
            setFaqTab(0);
        } else {
            setFaqTab(tab);
        }
    };

    useEffect(() => {
        const ques = [];
        const ans = [];
        if (faq) {
            faq?.forEach((e) => {
                ques.push({
                    id: e.id,
                    value: e.question,
                    label: e.answer,
                });
                ans.push({
                    id: e.id,
                    value: e.answer,
                });
            });

            setFaqQues(ques);
            setFaqAnswer(ans);
        }
    }, [faq]);

    return (
        <div className="main faq_page">
            <div className="main__content__faq">
                <div className="main__title">
                    <div className="main__title__logo">
                        <img src={faqIcon} alt="instruct" />
                    </div>
                    <div className="main__title__text">
                        <p>Самые часто задаваемые</p>
                        <span>вопросы и ответы </span>
                    </div>
                </div>
                <div className="main__content__faq__desc">
                    <p>
                        Sky Invest занимается брокерской/дилерской деятельностью
                        на более 150 рынках по всему миру. В качестве брокера
                        Sky Invest предоставляет институционным и
                        профессиональным трейдерам прямой доступ к ("онлайн")
                        услугам по клирингу и исполнению сделок с широким
                        спектром инструментов (включая акции, опционы, фьючерсы,
                        валюту, облигации, золото
                    </p>
                </div>
            </div>
            <div className="main__content__faq__content">
                <div className="main__content__faq__content__links">
                    {faqQues && faqQues.length
                        ? faqQues.map((e, idx) => (
                              <div
                                  key={e.id}
                                  className={`faq_btn_block ${
                                      faqTab === e.id ? "active" : ""
                                  }`}
                              >
                                  <Button
                                      theme={
                                          faqTab === e.id
                                              ? "beforesubmit"
                                              : "usually"
                                      }
                                      onClick={() => toggleFaqTab(e.id)}
                                  >
                                      {e.value}

                                      <svg
                                          width="12"
                                          height="7"
                                          viewBox="0 0 12 7"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M11.3125 1.375L6.34375 5.875C6.15625 6.0625 5.875 6.0625 5.6875 5.875L0.65625 1.375C0.4375 1.1875 0.4375 0.875 0.625 0.6875C0.8125 0.46875 1.125 0.46875 1.3125 0.65625L6 4.84375L10.6562 0.65625C10.8438 0.46875 11.1562 0.46875 11.3438 0.6875C11.5312 0.875 11.5312 1.1875 11.3125 1.375Z"
                                              fill="black"
                                          />
                                      </svg>
                                  </Button>
                                  <div className="faq_block_main">
                                      {faqQues && faqQues.length
                                          ? faqQues.map((e) => {
                                                if (e.id === faqTab) {
                                                    return (
                                                        <div className="faq_block">
                                                            <div className="faq_block__title">
                                                                <span>
                                                                    {e.value}
                                                                </span>
                                                            </div>
                                                            <div className="faq_block__desk">
                                                                <p>{e.label}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            })
                                          : null}
                                  </div>
                              </div>
                          ))
                        : null}
                </div>
                <div className="main__content__faq__content__block">
                    {faqQues && faqQues.length
                        ? faqQues.map((e) => {
                              if (e.id === faqTab) {
                                  return (
                                      <div className="faq_block">
                                          <div className="faq_block__title">
                                              <span>{e.value}</span>
                                          </div>
                                          <div className="faq_block__desk">
                                              <p>{e.label}</p>
                                          </div>
                                      </div>
                                  );
                              }
                          })
                        : null}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FAQ;

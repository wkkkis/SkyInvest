import React, { useEffect, useState } from "react";
import InfoBlock from "../../components/UI/InfoBlock";
import Select from "@components/Select";
import UserLine from "../../components/UserChart/UserLine";
import UserBar from "../../components/UserChart/UserBar";
import UserPie from "../../components/UserChart/UserPie";
import InvestorGroup from "../../components/InvestorComponents/InvestorGroup";

import { useDispatch, useSelector } from "react-redux/es/exports";
import SpinnerLoad from "../../components/SpinnerLoad";
import CloseGroup from "../../components/InvestorComponents/CloseGroup";
import {
    getBalance,
    getProfileInfo,
    userActions,
} from "../../store/user/user.api";
import {
    getGroupInfo,
    getTraderDashBoardGroups,
    groupActions,
} from "../../store/group/group.api";
import { useParams } from "react-router";
import InsideGroupModal from "../../components/Modals/InsideGroupModal";
import LeaveGroup from "../../components/Modals/LeaveGroup";
import MessageBox from "../../components/MessageBox";
import CloseGroupModal from "../../components/Modals/CloseGroupModal";

const data = [
    {
        id: 1,
        first_name: "User",
        last_name: "Example",
        email: "userexample@gmail.com",
        title: "Test",
        description: "Testestestestestestestestest",
        amount_collected: 200,
        need_sum: 10000,
        start: "2022-06-10T10:49:13.539Z",
        end: "2022-06-10T10:49:13.539Z",
        status: "recruited",
    },
    {
        id: 2,
        first_name: "User",
        last_name: "Example",
        email: "userexample@gmail.com",
        title: "Test",
        description: "Testestestestestestestestest",
        amount_collected: 200,
        need_sum: 10000,
        start: "2022-06-10T10:49:13.539Z",
        end: "2022-06-10T10:49:13.539Z",
        status: "recruited",
    },
    {
        id: 3,
        first_name: "User",
        last_name: "Example",
        email: "userexample@gmail.com",
        title: "Test",
        description: "Testestestestestestestestest",
        amount_collected: 200,
        need_sum: 10000,
        start: "2022-06-10T10:49:13.539Z",
        end: "2022-06-10T10:49:13.539Z",
        status: "recruited",
    },
];

const UserFirstTab = ({ id }) => {
    const [groupId, setGroupId] = useState();
    const [leaveId, setLeaveId] = useState();
    const [closeId, setCloseId] = useState();
    const dispatch = useDispatch();
    const params = useParams();

    const { user, isTraider } = useSelector((state) => state.user);
    const { groups, message, complete } = useSelector((state) => state.group);

    useEffect(() => {
        if (message === "Вы успешно присоединились") {
            setGroupId("");
            dispatch(getBalance());
        }
    }, [message]);

    useEffect(() => {
        dispatch(getTraderDashBoardGroups(id));
    }, []);

    return (
        <div className="user_tab">
            <div className="user_tab__title">
                <span>РЕЗУЛЬТАТЫ</span>
            </div>
            <div className="user_tab__results">
                <div className="user_tab__results__profit">
                    <InfoBlock
                        label="Ежедневно"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="Недельный"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="В месяц"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                    <InfoBlock
                        label="Годовой"
                        value={`0 %`}
                        vWeigth="700"
                        color="green"
                        opactityLabel
                    />
                </div>
                <div className="user_tab__results__filter">
                    <span>Показать за время</span>
                    <Select defaultOption="Поледние 24 часа">
                        <li>jojo</li>
                        <li>jojo</li>
                        <li>jojo</li>
                    </Select>
                </div>
            </div>
            <div className="user_tab__chart">
                <UserLine />
            </div>
            <div className="user_tab__chart_result">
                <div className="user_tab__chart_result__block">
                    <div className="user_tab__chart_result__block__title">
                        <span>РЕЗУЛЬТАТЫ</span>
                    </div>
                    <div className="select_cont">
                        <span>Показать за время</span>
                        <Select defaultOption="Поледние 24 часа">
                            <li>jojo</li>
                            <li>jojo</li>
                            <li>jojo</li>
                        </Select>
                    </div>
                    <div className="user_tab__chart_result__block__chart">
                        <UserBar />
                    </div>
                    <div className="user_tab__chart_result__block__title">
                        <span>ТОП 3 СИМВОЛОВ УРОВНЯ ПРОДАЖ</span>
                    </div>
                    <div className="user_tab__chart_result__block__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span>Символ</span>
                                    </th>
                                    <th>
                                        <span>Уровень продаж</span>
                                    </th>
                                    <th>
                                        <span>Win рейт</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span>GMTUSDT</span>
                                    </td>
                                    <td>
                                        <span>362.00 ADA</span>
                                    </td>
                                    <td>
                                        <span>100.00%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>GMTUSDT</span>
                                    </td>
                                    <td>
                                        <span>362.00 ADA</span>
                                    </td>
                                    <td>
                                        <span>100.00%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>GMTUSDT</span>
                                    </td>
                                    <td>
                                        <span>362.00 ADA</span>
                                    </td>
                                    <td>
                                        <span>100.00%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="user_tab__chart_result__block__title">
                        <span>НЕДАВНО ПРОДАВАЛИСЬ</span>
                    </div>
                    <ul className="user_tab__chart_result__block__list">
                        <li>
                            NEARUSDT, ADAUSDT, GMTUSDT, BTCUSDT, SOLUSDT,
                            LUNAUSDT
                        </li>
                    </ul>
                </div>
                <div className="user_tab__chart_result__block">
                    <div className="user_tab__chart_result__block__title">
                        <span>Предпочтение символа</span>
                    </div>
                    <div className="select_cont">
                        <span>Показать за время</span>
                        <Select defaultOption="Поледние 24 часа">
                            <li>jojo</li>
                            <li>jojo</li>
                            <li>jojo</li>
                        </Select>
                    </div>
                    <div className="user_tab__chart_result__block__chart_pie">
                        <UserPie />
                        <span>
                            20.00% <br />
                            BTCUSDT
                        </span>
                    </div>
                    <div className="user_tab__chart_result__block__chart_result">
                        <div className="chart_result_item">
                            <i className="purple"></i>
                            <span>GMTUSDT</span>
                            <p>20.00%</p>
                        </div>
                        <div className="chart_result_item">
                            <i className="pink"></i>
                            <span>GMTUSDT</span>
                            <p>20.00%</p>
                        </div>
                        <div className="chart_result_item">
                            <i className="yellow"></i>
                            <span>GMTUSDT</span>
                            <p>20.00%</p>
                        </div>
                        <div className="chart_result_item">
                            <i className="blue"></i>
                            <span>GMTUSDT</span>
                            <p>20.00%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user_tab__open_groups">
                <div className="user_tab__open_groups__title">
                    <span>ОТКРЫТЫЕ ГРУППЫ</span>
                </div>
                <div className="user_tab__open_groups__content">
                    {groups?.open?.length
                        ? groups?.open?.length
                            ? groups?.open
                                  .sort(function (a, b) {
                                      return (
                                          new Date(b.start_date) -
                                          new Date(a.start_date)
                                      );
                                  })
                                  .map((e) => (
                                      <InvestorGroup
                                          className="open_group_item"
                                          e={e}
                                          setleavegroupid={(e) => setLeaveId(e)}
                                          setgroupid={(e) => setGroupId(e)}
                                      />
                                  ))
                            : ""
                        : "Не найдено"}
                </div>
            </div>
            <div className="user_tab__close_groups">
                <div className="user_tab__open_groups__title">
                    <span>ЗАКРЫТЫЕ ГРУППЫ</span>
                </div>
                {groups?.close?.length ? (
                    <>
                        <div className="user_tab__close_groups__filters">
                            <div className="select_cont">
                                <span>Показать за время</span>
                                <Select defaultOption="Поледние 24 часа">
                                    <li>jojo</li>
                                    <li>jojo</li>
                                    <li>jojo</li>
                                </Select>
                            </div>
                            <InfoBlock
                                label="Количество групп"
                                value={`15`}
                                vWeigth="700"
                                opactityLabel
                            />
                            <InfoBlock
                                label="Процент завершенных групп"
                                value={`0 %`}
                                vWeigth="700"
                                opactityLabel
                            />
                            <InfoBlock
                                label="Коэфициент прыбльных и убыточных групп"
                                value={`12 %`}
                                vWeigth="700"
                                opactityLabel
                            />
                        </div>
                        <div className="user_tab__close_groups__content">
                            {groups ? (
                                groups?.close?.length ? (
                                    data?.close
                                        .sort(function (a, b) {
                                            return (
                                                new Date(b.start_date) -
                                                new Date(a.start_date)
                                            );
                                        })
                                        .map((e) => (
                                            <CloseGroup
                                                className="close_groups_item"
                                                e={e}
                                                setgroupid={(e) =>
                                                    setCloseId(e)
                                                }
                                            />
                                        ))
                                ) : null
                            ) : (
                                <SpinnerLoad />
                            )}
                        </div>
                    </>
                ) : (
                    "Не найдено"
                )}
            </div>
            {groupId && (
                <InsideGroupModal
                    handleChange={() => setGroupId("")}
                    info={groupId}
                />
            )}
            {closeId && (
                <CloseGroupModal
                    handleChange={() => setCloseId("")}
                    info={closeId}
                />
            )}
            {leaveId && (
                <LeaveGroup
                    info={leaveId}
                    handleChange={() => setLeaveId("")}
                />
            )}
            {message
                ? Object.values(message).map((e) => (
                      <MessageBox message={e} error={true} />
                  ))
                : null}
            {complete ? <MessageBox message={complete} error={false} /> : null}
        </div>
    );
};

export default UserFirstTab;

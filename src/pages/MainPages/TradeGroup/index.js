import React, { useEffect, useState } from "react";

//Icons
import tradeGroup from "@assets/img/forAboutCauses.svg";

//Components
import CardInfo from "@components/CardInfo";
import Button from "@components/Button";
import ProgressBar from "@components/ProgressBar";
import Footer from "@components/Footer";

//Styles
import "./TradeGroup.scss";
import InsideGroupModal from "../../../components/Modals/InsideGroupModal";
import InvestorGroup from "../../../components/InvestorComponents/InvestorGroup";
import LeaveGroup from "../../../components/Modals/LeaveGroup";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllGroups,
    groupActions,
    messageClean,
} from "../../../store/group/group.api";
import SpinnerLoad from "../../../components/SpinnerLoad";
import MessageBox from "../../../components/MessageBox";

const TradeGroup = () => {
    const [groupId, setGroupId] = useState();
    const [leaveId, setLeaveId] = useState();
    const dispatch = useDispatch();

    const { user, isTraider } = useSelector((state) => state.user);
    const { groups, message, complete } = useSelector((state) => state.group);

    useEffect(() => {
        dispatch(getAllGroups());
    }, [user]);

    useEffect(() => {
        dispatch(groupActions.message(""));
    }, []);

    return (
        <div className="main trade_group">
            <div className="main__content__premium">
                <div className="main__title">
                    <img src={tradeGroup} alt="instruct" />
                    <div className="main__title__text">
                        <p>Список</p>
                        <span>групп </span>
                    </div>
                </div>
                <div className="main__content__premium__desc">
                    <p>
                        Sky Invest занимается брокерской/дилерской деятельностью
                        на более 150 рынках по всему миру. В качестве брокера
                        Sky Invest предоставляет институционным и
                        профессиональным трейдерам прямой доступ к ("онлайн")
                    </p>
                </div>
            </div>

            <div className="main__trade_group">
                {groups ? (
                    groups.map((e) => (
                        <InvestorGroup
                            e={e}
                            setleavegroupid={(e) => setLeaveId(e)}
                            setgroupid={(e) => setGroupId(e)}
                        />
                    ))
                ) : (
                    <SpinnerLoad />
                )}
            </div>
            {groupId && (
                <InsideGroupModal
                    handleChange={() => setGroupId("")}
                    info={groupId}
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
                      <MessageBox message={e[0]} error={true} />
                  ))
                : null}
            {complete ? <MessageBox message={complete} error={false} /> : null}
            <Footer />
        </div>
    );
};

export default TradeGroup;

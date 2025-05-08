"use client"
import { useState } from "react";
import { DashHeader } from "./DashHeader";
import { Container } from "./Container";
import { UserTabs } from "./UserTabs";
import { BasicInfo } from "./profile/BasicInfo";
import { Preferences } from "./profile/Preferences";
import { Security } from "./profile/Security";
import { tab } from "../utils/tab";

export const Profile = () => {
    const [activeTab, setActiveTab] = useState(1);

    const user = {
        id: 1,
        name: "Maria",
        lastname: "Alarcon",
        email: "mariagaa993@gmail.com",
        phone: "+5491112345678",
        role: "Super Admin"
    };

    return (
        <>
            <DashHeader title={"Perfil de Usuario"} />
            <Container>
                <h2 className="font-semibold text-xl">Mi Perfil</h2>
                <UserTabs tabs={tab.profile} activeTab={activeTab} setActiveTab={setActiveTab} />
                { activeTab === 1 && <BasicInfo user={user} /> }
                { activeTab === 2 && <Preferences /> }
                { activeTab === 3 && <Security /> }
            </Container>
        </>
    );
};

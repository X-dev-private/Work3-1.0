import React from "react";
import Sidebar from "../../libs/SideBar/SideBar";
import BountiesCard from "../../components/JobsCard/BountiesCard";
import HeaderApp from "../../libs/Header/HeaderApp";
import "../../../Styles/GlobalPages.css"

const AppPage = () => {
    return (
        <main className="mainApp">
                <HeaderApp />
            <div className="mainAppPage">
                    <Sidebar />
                <div className="jobs-card-container">
                    {[...Array(7)].map((_, index) => (
                        <BountiesCard key={index} />
                    ))}
                </div>
            </div>
        </main>
    )
}
export default AppPage;
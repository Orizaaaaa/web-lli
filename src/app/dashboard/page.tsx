"use client"
import React from "react";
import ChartOne from "@/components/fragemnts/Charts/ChartOne";
import ChartThree from "@/components/fragemnts/Charts/ChartThree";
import ChartTwo from "@/components/fragemnts/Charts/ChartTwo";
import ChatCard from "@/components/fragemnts/Chat/ChatCard";
import TableOne from "@/components/fragemnts/Tables/TableOne";
import CardDataStats from "@/components/fragemnts/CardDataStats";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { cardStats } from "@/utils/dataObject";


const Dashboard: React.FC = () => {
    return (
        <DefaultLayout>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {cardStats.map((item, index) => (
                    <CardDataStats title={item.title} total={item.total} rate={item.rate} levelUp>
                        {item.icon}
                    </CardDataStats>
                ))}
            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                {/* <ChatCard /> */}
            </div>
        </DefaultLayout>
    );
};

export default Dashboard;

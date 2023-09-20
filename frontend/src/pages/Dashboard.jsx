import {
   DollarCircleOutlined,
   ShoppingOutlined,
   UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { displayUsersRoute } from "../utils/ApiRoutes";
import DashboardHeader from "../components/DashboardHeader";
import "../components/Dashboard.css";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import AppFooter from "../components/DashboardFooter";
import DashboardSideMenu from "../components/DashboardSideMenu";

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

const Dashboard = () => {
   const [users, setUsers] = useState([]);
   const fetchUsers = async () => {
      const res = await axios.get(displayUsersRoute);
      setUsers(res.data);
      console.log(res);
      console.log(users);
   };
   return (
      <>
         <DashboardHeader />
         <div className='SideMenuAndPageContent'>
            <DashboardSideMenu />
            <Space
               size={20}
               direction='vertical'
            >
               <Typography.Title level={4}>Dashboard</Typography.Title>
               <Space direction='horizontal'>
                  <DashboardCard
                     icon={
                        <UserOutlined
                           style={{
                              color: "green",
                              backgroundColor: "rgba(0,255,0,0.25)",
                              borderRadius: 20,
                              fontSize: 24,
                              padding: 8,
                           }}
                        />
                     }
                     title={"Users"}
                     value={users.length}
                  />
               </Space>
               <Space>
                  <DashboardChart users={users} />
               </Space>
            </Space>
         </div>
         <AppFooter />
      </>
   );
};

function DashboardCard({ title, value, icon }) {
   return (
      <Card>
         <Space direction='horizontal'>
            {icon}
            <Statistic
               title={title}
               value={value}
            />
         </Space>
      </Card>
   );
}
function DashboardChart({ users }) {
   const [usersData, setUsersData] = useState({
      labels: [],
      datasets: [],
   });

   useEffect(() => {
      const registrationTimes = users.map((user) => {
         return user.createdAt;
      });

      const labels = registrationTimes.map((timestamp) => {
         const date = new Date(timestamp);
         return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      });

      const data = users.map(() => 1); // Count of users at each registration time

      const dataSource = {
         labels,
         datasets: [
            {
               label: "Users",
               data,
               backgroundColor: "rgba(255, 0, 0, 1)",
            },
         ],
      };

      setUsersData(dataSource);
   }, [users]);

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: "bottom",
         },
         title: {
            display: true,
            text: "Users",
         },
      },
   };

   return (
      <Card style={{ width: 500, height: 250 }}>
         <Bar
            options={options}
            data={usersData}
         />
      </Card>
   );
}

export default Dashboard;

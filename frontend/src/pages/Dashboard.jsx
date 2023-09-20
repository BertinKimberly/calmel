import {
   DollarCircleOutlined,
   ShoppingOutlined,
   UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { displayUsersRoute } from "../utils/ApiRoutes";

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

// return (
//    <>
//       <Typography.Text>Recent Orders</Typography.Text>
//       <Table
//          columns={[
//             {
//                title: "Title",
//                dataIndex: "title",
//             },
//             {
//                title: "Quantity",
//                dataIndex: "quantity",
//             },
//             {
//                title: "Price",
//                dataIndex: "discountedPrice",
//             },
//          ]}
//          loading={loading}
//          dataSource={dataSource}
//          pagination={false}
//       ></Table>

function DashboardChart({users}) {
   const [usersData, setUsersData] = useState({
      labels: [],
      datasets: [],
   });

   useEffect(() => {
      const labels = users.map((user) => {
         return `User-${user._id}`;
      });
      const data = users.map((user) => {
         return user.username;
      });

      const dataSource = {
         labels,
         datasets: [
            {
               label: "Users",
               data: data,
               backgroundColor: "rgba(255, 0, 0, 1)",
            },
         ],
      };

      setUsersData(dataSource);
   }, []);

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

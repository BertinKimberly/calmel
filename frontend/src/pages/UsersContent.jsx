import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { displayUsersRoute } from "../utils/ApiRoutes";
import axios from "axios";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";
import DashboardSideMenu from "../components/DashboardSideMenu";

function UsersContent() {
   const [loading, setLoading] = useState(false);
   const [dataSource, setDataSource] = useState([]);

   useEffect(() => {
      setLoading(true);
      const getUsers = axios.get(displayUsersRoute).then((res) => {
         setDataSource(res.data);
         console.log(res);
         setLoading(false);
      });
   }, []);

   return (
      <>
         <DashboardHeader />
         <div className='SideMenuAndPageContent'>
            <DashboardSideMenu />
            <Space
               size={20}
               direction='vertical'
            >
               <Typography.Title level={4}>Users</Typography.Title>
               <Table
                  loading={loading}
                  columns={[
                     {
                        title: "Username",
                        dataIndex: "username",
                     },

                     {
                        title: "Email",
                        dataIndex: "email",
                     },
                     {
                        title: "Role",
                        dataIndex: "role",
                     },
                  ]}
                  dataSource={dataSource}
                  pagination={{
                     pageSize: 5,
                  }}
               ></Table>
            </Space>
         </div>
         <DashboardFooter />
      </>
   );
}
export default UsersContent;

import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, List, Space, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { displayUsersRoute } from "../utils/ApiRoutes";

function DashboardHeader() {
   const [comments, setComments] = useState([]);
   const [users, setusers] = useState([]);
   const [commentsOpen, setCommentsOpen] = useState(false);
   const [notificationsOpen, setNotificationsOpen] = useState(false);

   useEffect(() => {
      const fetchUsers = async () => {
         await axios.get(displayUsersRoute).then((res) => setusers(res.data));
      };
      fetchUsers();
   }, []);

   return (
      <div className='AppHeader'>
         <Typography.Link
            href='/'
            style={{ fontSize: "30px" }}
         >
            Calmel
         </Typography.Link>
         <Typography.Title className="title">Calmel's dashboard</Typography.Title>
         <Space>
            <Badge
               count={comments.length}
               dot
            >
               <MailOutlined
                  style={{ fontSize: 24 }}
                  onClick={() => {
                     setCommentsOpen(true);
                  }}
               />
            </Badge>
            <Badge count={users.length}>
               <BellFilled
                  style={{ fontSize: 24 }}
                  onClick={() => {
                     setNotificationsOpen(true);
                  }}
               />
            </Badge>
         </Space>
         <Drawer
            title='Comments'
            open={commentsOpen}
            onClose={() => {
               setCommentsOpen(false);
            }}
            maskClosable
         >
            <List
               dataSource={users}
               renderItem={(item) => {
                  return <List.Item>{item.body}</List.Item>;
               }}
            ></List>
         </Drawer>
         <Drawer
            title='Notifications'
            open={notificationsOpen}
            onClose={() => {
               setNotificationsOpen(false);
            }}
            maskClosable
         >
            <List
               dataSource={users}
               renderItem={(item) => {
                  return (
                     <List.Item>
                        <Typography.Text strong>{item.title}</Typography.Text>{" "}
                        has been registered!
                     </List.Item>
                  );
               }}
            ></List>
         </Drawer>
      </div>
   );
}
export default DashboardHeader;

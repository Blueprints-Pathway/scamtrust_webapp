import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import AdminTable from '../../../components/admin/general/AdminTable';
import { Checkbox } from 'antd';
import classes from './AdminMessagingPage.module.css'
import { useNavigate } from 'react-router-dom';

const AdminMessagingPage = () => {
    const navigate = useNavigate();
    const items = [
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
        [<Checkbox>Someone's name</Checkbox>, '1111 2222 3333 44', '08111000222', '11-11-2011', 'Someones@yahoo.com', '500,000', 'Active'],
       
      
      ]
      const headings = ['Name', 'User ID', 'Phone No', 'DAC', 'Email Address', 'Balance', 'Status'];
    return (
       <AppLayout>
        <div className={classes.wrapper}>
           

        <AdminTable items = {items} headings = {headings}  />
        <button className={classes.button} onClick={() => navigate("/admin-send-message")}>Next</button>
           

        </div>
       </AppLayout>
    );
};

export default AdminMessagingPage;
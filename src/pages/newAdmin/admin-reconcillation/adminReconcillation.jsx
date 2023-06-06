import { colors } from "@mui/material";
import ManagementContainer from "../../../components/admin/admin-reconcillation/managementContainer";
import AppLayout from "../../../components/layout/AppLayout";
import classes from './adminReconcillation.module.css'
import AdminTable from "../../../components/admin/general/AdminTable";

const AdminReconcillation = () => {
    const items = [
        ['500,000', '11-2-2022', '11-2-2022', '794A-6664-22', 'Monefy', 'Monefy'],
        ['500,000', '11-2-2022', '11-2-2022', '794A-6664-22', 'Monefy', 'Monefy'],
        ['500,000', '11-2-2022', '11-2-2022', '794A-6664-22', 'Monefy', 'Monefy'],
        ['500,000', '11-2-2022', '11-2-2022', '794A-6664-22', 'Monefy', 'Monefy'],
      ]
      const headings = ['Name', 'Transaction Date', 'Amount', 'Reference No', 'Service Partner', 'Status'];
    return (
       <AppLayout>
        <div className={classes.wrapper}>

        <h1>Partnership Management</h1>
        <div className={classes['management-div']}>
            <ManagementContainer title = {'Monefy'} amount = {100000} color =  '#008000' />
            <ManagementContainer title = {'Termii'} amount = {100000} color = 'linear-gradient(180deg, #0357BF 0%, rgba(43, 127, 232, 0.5) 100%)' />
            <ManagementContainer title = {'Freshdesk'} amount = {100000} color = '#FF0000'/>
        </div>
        <div className={classes['upload-div']}>
            <h1>Reconcilation</h1>
            <button className={classes.button}>Upload</button>
        </div>
        
        
        <AdminTable items = {items} headings = {headings} />
        <div className={classes['bottom-container']}>
        <button className={classes.button}>Reconcile</button>

        </div>
        </div>

       </AppLayout>
    )

}


export default AdminReconcillation;
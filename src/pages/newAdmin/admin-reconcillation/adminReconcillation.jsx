import { colors } from "@mui/material";
import ManagementContainer from "../../../components/admin/admin-reconcillation/managementContainer";
import AppLayout from "../../../components/layout/AppLayout";
import classes from './adminReconcillation.module.css'
import AdminTable from "../../../components/admin/general/AdminTable";
import UploadBtn from "../../../components/admin/admin-reconcillation/UploadBtn";
import ReconcileBtn from "../../../components/admin/admin-reconcillation/ReconcileBtn";
import { useNavigate } from "react-router-dom";

const AdminReconcillation = () => {

    const navigate = useNavigate();

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

        <h1 className={classes.title}>
            Partnership Management
        </h1>
        <div className={classes['management-div']}>
            <ManagementContainer title = {'Monefy'} amount = {'500,000'} color =  '#008000' />
            <ManagementContainer title = {'Termii'} amount = {'500,000'} color = '#347AD3' />
            <ManagementContainer title = {'Freshdesk'} amount = {'500,000'} color = '#FF0000'/>
        </div>

        <div className={classes['upload-div']}>
            <h1 className={classes.heading}>Reconcilation</h1>
            <UploadBtn />
            {/* <button className={classes.button}>Upload</button> */}
        </div>

        <hr className={classes.line} />
        
        
        <AdminTable items = {items} headings = {headings} />
        <div className={classes['bottom-container']}>
            <ReconcileBtn />
        {/* <button className={classes.button}>Reconcile</button> */}
        </div>
        </div>

       </AppLayout>
    )

}


export default AdminReconcillation;
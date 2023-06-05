import AppLayout from "../../../components/layout/AppLayout";
import classes from './adminReconcillation.module.css'

const AdminReconcillation = () => {
    return (
       <AppLayout>
        <h1>Partnership Management</h1>
        <div className={classes['management-div']}>
            <div>
               <h1>Monefy</h1>
               <h2>N500,000</h2>
            </div>
        </div>
       </AppLayout>
    )

}


export default AdminReconcillation;
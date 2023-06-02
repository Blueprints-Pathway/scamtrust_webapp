import AppLayout from "../../../components/layout/AppLayout";
import InputContainer from "../../../components/user-profile/InputContainer";
import classes from './AdminUserProfile.module.css'
import Transaction from '../../../assets/images/transfer_obi.svg'
import Dropdown from '../../../assets/images/dropdown.svg'


const AdminUserProfile = () =>{

    return (
        <AppLayout>
            <div className="bg-white h-full w-full px-5 pt-2">
            <div className="flex items-center justify-start py-12">
                <button className={classes['top-button']}> <img src = {Transaction} alt="..." style={{height: '20px'}} /> Customer's Transactions </button>
                <button  className={classes['top-button']}>Update Customer's Account <img src = {Dropdown} alt="..." /> </button>
            </div>
            <div className={classes.container}>
                <div className={classes['container-column']}>
                    <div className={classes['profile-container']}>
                        <div className={classes['circle-avatar']}>
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="user img" srcset="" />
                        </div>
                        <div className = {classes['wallet-div']}>
                        <h3>Wallet Balance</h3>
                        <div className={classes.greenBtn}>N700,000.00</div>
                        </div>
                    </div>
                   <InputContainer title = 'Name' content = 'Ibrahim Mustapha'/>
                   <InputContainer title = 'Phone Number' content = '07078796542'/>
                   <InputContainer title = 'Bank Verification Number' content = '00454472301'/>
                   <InputContainer title = 'Address' content = 'Oko-Erin Road Ilorin East, Kafanchan,Nigeria'/>
                </div>
                <div className={classes['container-column']}>
                    <InputContainer title = 'Email Address' content = 'Ibrahim.mustapha@gmail.com'/>
                   <InputContainer title = 'Account creation date' content = 'Wednesday 30th May, 2022'/>
                   <InputContainer title = 'Date of Birth' content = '18th October 1997'/>
                   <InputContainer title = 'User ID' content = 'ID-110754'/>
                   <InputContainer title = 'Status' content = 'Active'/>
                </div>
                <div className={classes['container-column']}>
                    <InputContainer title = 'Total volume of transactions performed' content = '15'/>
                   <InputContainer title = 'Total value of transactions performed' content = '₦500,000'/>
                   <InputContainer title = 'Withdrawal Status' content = 'Active'/>
                   <InputContainer title = 'Cashout Account' content = '4058090355 - Zenith Bank'/>
                   <InputContainer title = 'Last Active' content = '4-07-2022, 9:30pm'/>
                </div>
               

            </div>
             <button className={classes['deactivate-btn']}>Deactivate Account</button>
            </div>
        </AppLayout>
    )
}

export default AdminUserProfile;
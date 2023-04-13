import React from 'react'
import classes from './RateTransactions.module.css'
import AppLayout from '../../../components/layout/AppLayout'
import { Card, Rate } from 'antd'

const RateTransactions = () => {
  return (
    <AppLayout>
        <div className={classes.wrapper}>
            <Card className={classes.con}>
                <div className={classes.titleCon}>
                    <p className={classes.title}>Rate this transaction</p>
                </div>
                <hr className={classes.hr} />
                <hr className={classes.hr} />

                <div className={classes.content}>

                    <div className={classes.rateCon}>
                        <p className={classes.rateTitle}>Delivery</p>
                        <div className={classes.ratings}>
                            <Rate defaultValue={1} className={classes.rate} />
                            <hr className={classes.rateHr} />
                        </div>
                    </div>

                    <div className={classes.rateCon}>
                        <p className={classes.rateTitle}>Price</p>
                        <div className={classes.ratings}>
                            <Rate defaultValue={1} className={classes.rate} />
                            <hr className={classes.rateHr} />
                        </div>
                    </div>

                    <div className={classes.rateCon}>
                        <p className={classes.rateTitle}>Service</p>
                        <div className={classes.ratings}>
                            <Rate defaultValue={1} className={classes.rate} />
                            <hr className={classes.rateHr} />
                        </div>
                    </div>

                    <div className={classes.rateCon}>
                        <p className={classes.rateTitle}>Quality</p>
                        <div className={classes.ratings}>
                            <Rate defaultValue={1} className={classes.rate} />
                            <hr className={classes.rateHr} />
                        </div>
                    </div>

                </div>

                <div className={classes.buttonCon}>
                    <button className={classes.button}>Continue</button>
                </div>
            </Card>
        </div>
    </AppLayout>
  )
}

export default RateTransactions
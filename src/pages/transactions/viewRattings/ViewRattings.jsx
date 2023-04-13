import React from 'react'
import classes from './ViewRattings.module.css'
import AppLayout from '../../../components/layout/AppLayout'
import FooterLogo from '../../../components/FooterLogo/FooterLogo'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { Card, Rate, Steps } from 'antd'


const items = [
	{
		title: <p className={classes["steps"]}>Awaiting</p>,
	},
	{
		title: <p className={classes["steps"]}>On-going</p>,
	},
	{
		title: <p className={classes["steps"]}>Completed</p>,
	},
];

const ViewRattings = () => {

    const navigate = useNavigate();

  return (
    <AppLayout>
			<div className={classes["wrapper"]}>
				<Card className={classes["card-wrapper"]}>
					<div onClick={() => navigate(-1)} className={classes["button-con"]}>
						<HiArrowNarrowLeft className={classes["arrow"]} />
						<button className={classes["card-btn"]}>Back</button>
					</div>
					<div className={classes["top"]}>
						{/* TOP LEFT */}
						<div className={classes["top-left"]}>
							<div className={classes["left-1"]}>
								<p className={classes["top-left-id"]}>ID - 6057702</p>
								<p className={classes["top-left-vendor"]}>Ilerioluwa Brown</p>
							</div>
							{/* TOP MIDDLE */}
							<div className={classes["top-middle"]}>
								<p className={classes["top-middle-status"]}>
									<b>Status:</b>
									<span className={classes["top-middle-span"]}>Completed</span>
								</p>
								<p className={classes["top-middle-date"]}>Today, 8:48 AM</p>
							</div>
						</div>
						{/* TOP RIGHT */}
						<div className={classes["top-right"]}>
							<Steps
								className={classes["steps-con"]}
								disabled
								current={3}
								labelPlacement="vertical"
								items={items}
							/>
							<br />
						</div>
					</div>


					{/* BOTTOM */}
					<div className={classes["bottom"]}>
						<div className={classes["bottom-con"]}>
							<div className={classes["title-div"]}>
								<p className={classes["title"]}>Transaction details</p>
							</div>
							<div className={classes["content-con"]}>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Delivery</p>
                                    <Rate className={classes["rate"]} defaultValue={3} />
								</div>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Price</p>
                                    <Rate className={classes["rate"]} defaultValue={3} />
								</div>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Service</p>
									<Rate className={classes["rate"]} defaultValue={3} />
								</div>
								<div className={classes["content"]}>
									<p className={classes["content-left"]}>Quality</p>
									<Rate className={classes["rate"]} defaultValue={3} />
								</div>
							</div>
						</div>
					</div>



					<div className={classes["footer"]}>
						<FooterLogo />
					</div>
				</Card>
			</div>
		</AppLayout>
  )
}

export default ViewRattings
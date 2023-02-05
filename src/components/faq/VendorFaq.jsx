import React from 'react'

const VendorFaq = () => {
  return (
    <div className='h-[100vh] mb-[20rem]'>
        <div className='text-center'>
            <h1 className='mt-[5rem] mb-7 underline underline-offset-[6px] text-colorPrimary text-2xl lg:text-4xl lg:my-12 font-normal'>SCAMTRUST VENDOR FAQ</h1>
        </div>
        <div className='ml-2'>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>What is ScamTrust?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                    SCAMTRUST creates a more secure environment that encourages open transactions between companies and clients, thereby assisting brands in building a reputable business.
                </p>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>Who holds the money?</h1>
                <p className='text-xl  text-colorTertiary leading-9'>
                A dedicated, unique ScamTrust wallet account is generated for each transaction created on ScamTrust. 

                The funds are held securely in the provisioned trust account until the transaction is finished, at which point the account is closed. The provisioned trust account is linked to the transacting parties and the transaction.
                </p>
            </div>
            <div  className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>When can I use ScamTrust?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                ScamTrust is designed to give you peace of mind whenever you are having doubts or doing business with someone you don’t know.
                ST validates that the transaction terms have been met before payment is released.
                </p>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>How can I use ScamTrust?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                A vendor is a person who sells goods or offers services to another party and requires the payment to be held in ScamTrust pending the time of delivery or completion of the service. 

                A vendor receives payment after the transaction is marked as completed and the payment is authorized by the buyer.
                </p>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>When should I use ScamTrust?</h1>
                <ul className='text-xl text-colorTertiary leading-9 list-disc ml-5'>
                    <li>When you are in a first-time business transaction and want to avoid the attendant uncertainty of service delivery</li>
                    <li>When it's a short-term transaction.</li>
                    <li>When it's a high-value transaction.</li>
                    <li>When both the buyer and seller are unfamiliar with the transaction.</li>
                </ul>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>Why should i use scam trust?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                ScamTrust encourages you to provide service while knowing that payment for the service has been made and is being held in trust for you in the scamtrust wallet account. 
                Scamtrust also helps you build and improve your business' reputation, by providing a rating system, that relays back to you how it can be improved.
                </p>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>How does ScamTrust help my brand's reputation and perception?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                By collecting payments through ScamTrust, you are giving your customers a guarantee that you are going to give them the best value for their money. People love brands that keep to their word, and they are going to love you too.
                </p>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>What happens after the buyer puts the payment for the item into the Scamtrust wallet?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                Once the buyer pays into the unique scamtrust account number for the item, the seller is notified of payment and is expected to make delivery to the buyer within the stipulated time frame. 

                Once the item is delivered, the seller logs into the account to complete delivery. 

                The buyer is then sent a notification requesting acceptance or rejection of the item.

                On acceptance, the seller is paid, and on rejection, the buyer is refunded.
                </p>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>What happens if the buyer is not satisfied with the product?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                The seller or buyer can agree to a second delivery attempt, accept the rejection, or reject it. If the seller accepts the rejection, then the buyer will be refunded. 

                However, if the seller rejects the rejection, then the seller is required to raise a dispute. 

                The ScamTrust Dispute Managers will mediate and ensure a resolution is reached. The buyer and seller are required to reach a mutual agreement for a dispute to be resolved
                </p>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg'>
                <h1 className='text-xl font-bold text-colorPrimary'>What payment methods exist on ScamTrust to enable payment for my goods and services?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                ScamTrsut supports the following payment methods; Scamtrust Wallet Bank Transfer into Unique account number
                </p>
            </div>
            <div className='my-4 border-[1px] border-gray-500 p-3 rounded-lg mb-28'>
                <h1 className='text-xl font-bold text-colorPrimary'>What are your charges?</h1>
                <p className='text-xl text-colorTertiary leading-9'>
                ST offers a tier-based pricing system.
                    TRANSACTION RANGE
                    FEE
                    Below ₦200,000
                    1% + ₦100
                    ₦200,000 - ₦500,000
                    1% + ₦100
                    Above ₦500,000
                    1% + ₦100
                </p>
            </div>
        </div>
    </div>
  )
}

export default VendorFaq
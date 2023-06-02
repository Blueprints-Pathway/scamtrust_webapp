import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsForm from './NewsForm';

const DemoContainer = (props) => {

    const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${`9fe77eeedd13076bc43e9b7ef`}&id=${`c9903e42ad`}`;

  return (
    <div>
        <div>
            <MailchimpSubscribe 
              url={postUrl}
              render={({ subscribe, status, message }) => (
                <NewsForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}

            />
        </div>
    </div>
  )
}

export default DemoContainer
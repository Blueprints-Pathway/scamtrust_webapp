import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SimpleForm from './SimpleForm';

const News = () => {
    const url = "https://gmail.us21.list-manage.com/subscribe/post?u=9fe77eeedd13076bc43e9b7ef&amp;id=c9903e42ad&amp;f_id=006fe6e1f0";
  return (
    <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <SimpleForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    </div>
  )
}

export default News
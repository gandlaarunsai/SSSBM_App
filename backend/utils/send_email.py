# import util.database_creds as mycreds
import os
from dotenv import load_dotenv


#libraries to send email
import smtplib
from email.message import EmailMessage

load_dotenv()

#email variables
email_pass= os.getenv("EMAIL_PASS")
email_id = os.getenv("EMAIL_ID")

def send_email(to, amount, edonid):

    msg= EmailMessage()
    msg['Subject']= 'Sri Shridi SaiBaktha Mandali'
    msg['From']= email_id
    msg['To']= to
    msg.set_content(f'Thank you for you Donation of rupess {amount}.\nWe have successfully registered your Donation with ID:{edonid}')

    # print(email_id)

    with smtplib.SMTP('smtp.gmail.com',587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()
        smtp.login(email_id, email_pass)
        smtp.send_message(msg)

# send_email('gandlaarunsai@gmail.com', '10000', '202050607myID')
import datetime
import secrets
import string

def generate_id(length=8, idFor='edonation'):
    
    timestamp= datetime.datetime.utcnow().strftime('%f%d%m%Y%H%M%S')

    alphabet = string.ascii_uppercase + string.digits
    unique_part = ''.join(secrets.choice(alphabet) for _ in range(length))

    if idFor == 'feedback':
        id = f"{timestamp}FD{unique_part}"
    else:
        id= f"{timestamp}ED{unique_part}"
    
    return id

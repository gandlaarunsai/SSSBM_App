import datetime
import secrets
import string

# Function to create a 30 character Unique ID to used for data base storage
def generate_id(length=8):
    
    timestamp= datetime.datetime.utcnow().strftime('%f%d%m%Y%H%M%S')

    alphabet = string.ascii_uppercase + string.digits
    unique_part = ''.join(secrets.choice(alphabet) for _ in range(length))

    id= f"{timestamp}ED{unique_part}"
    
    return id

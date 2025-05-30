import datetime
import secrets
import string

def generate_id(length=8):
    
    timestamp= datetime.datetime.utcnow().strftime('%f%d%m%Y%H%M%S')

    alphabet = string.ascii_uppercase + string.digits
    unique_part = ''.join(secrets.choice(alphabet) for _ in range(length))

    id= f"{timestamp}ED{unique_part}"
    
    return id

genID= generate_id()

print(genID, genID.__len__())
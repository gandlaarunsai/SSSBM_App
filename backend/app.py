from flask import Flask, request, jsonify
import mysql.connector
from datetime import datetime
from decimal import Decimal

import os
from dotenv import load_dotenv

#importing database related info
from utils.generate_id import generate_id
from utils.send_email import send_email # function helps send email notification

app = Flask(__name__)

load_dotenv()

# MySQL connection setup
db_config = {
    'host': 'localhost',
    'user': os.getenv("DB_USER"),
    'password': os.getenv("DB_PASSWORD"),
    'database': os.getenv("MY_DATABASE")
}

def get_db_connection():
    # print(f'Successfully Connected to the data base {db_config["database"]}')
    return mysql.connector.connect(**db_config)

@app.route('/', methods=['GET'])
def handle_home():
    #Creating a connection to database
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    updates_query = """
        SELECT * FROM updates
    """
    try:
        cursor.execute(updates_query)
        results = cursor.fetchall()

        return jsonify(results), 200
    
    except mysql.connector.Error as err:
        conn.rollback()
        return jsonify({'error': str(err)}), 500
    
    finally:
        cursor.close()
        conn.close()

@app.route('/feedback', methods=['POST'])
def submit_feedback():

    feedback_data= request.json

    #connect to database
    conn = get_db_connection()
    cursor = conn.cursor()

    # Unpack data from frontend
    is_complaint= feedback_data.get('is_complaint')
    description= feedback_data.get('description')
    feedback_id= generate_id(idFor='feedback')

    #saving data to data base
    try:
        cursor.execute("""
            INSERT INTO feedbacks (feedback_id, complaint, description) 
            VALUES ( %s, %s, %s )
        """, (feedback_id, is_complaint, description))

        conn.commit()
        return jsonify({'message': 'Feedback Submitted Successfully!'}), 200

    except mysql.connector.Error as err:
        conn.rollback()
        return jsonify({'error': str(err)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/edonation', methods=['POST'])
def handle_edonation():
    data = request.json

    # Unpack data from frontend
    # contact_id = data.get('contact_id')
    phone = data.get('phone_number')
    email = data.get('email')

    address_line1 = data.get('address_line1')
    city_town = data.get('city_town')
    state = data.get('state')
    country = data.get('country')
    pincode= data.get('pincode')

    transaction_status = data.get('status')
    mode_of_payment= data.get('MOD')
    paymentBank= data.get('transaction_bank')
    upi_id= data.get('UPI_ID')

    first_name = data.get('first_name')
    last_name = data.get('last_name')
    pan_card = data.get('pan_card')
    amount = data.get('amount')

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        # Checking if the contact details already exists
        # if exists take that contact ID
        cursor.execute("""
            SELECT contact_id FROM contacts WHERE phone_number = %s AND email_id = %s
        """, (phone, email))
        result = cursor.fetchone()

        if result:
            contact_id= result[0]
        else:
            # Insert contact
            cursor.execute("""
                INSERT INTO contacts (phone_number, email_id)
                VALUES (%s, %s)
            """, (phone, email))
            contact_id= cursor.lastrowid

        #check if same address already exists
        cursor.execute("""
            SELECT address_id FROM addresses WHERE LOWER(address_line1)=%s AND LOWER(city_town)=%s AND LOWER(state)=%s 
                       AND LOWER(country)=%s AND pincode=%s
        """, (address_line1.lower(), city_town.lower(), state.lower(), country.lower(), pincode))
        adds_result= cursor.fetchall()

        if adds_result:
            address_id= adds_result[0][0]
        else:
        # Insert address
            cursor.execute("""
                INSERT INTO addresses (address_line1, city_town, state, country, pincode)
                VALUES (%s, %s, %s, %s, %s)
            """, (
                address_line1,
                city_town,
                state,
                country,
                pincode
            ))
            address_id = cursor.lastrowid

        # Insert transaction
        cursor.execute("""
            INSERT INTO transactions (transaction_status, transaction_amount, mode_of_payment, transaction_bank, upi_id)
            VALUES (%s, %s, %s, %s, %s)
        """, (
            transaction_status,
            Decimal(amount),
            mode_of_payment,
            paymentBank,
            upi_id
        ))
        transaction_id = cursor.lastrowid

        donationID= generate_id()

        # Insert into main edonations table
        cursor.execute("""
            INSERT INTO edonations (edonation_id, first_name, last_name, amount_donated, pancard_number, contact_id, address_id, transactions_id)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            donationID,
            first_name, 
            last_name, 
            Decimal(amount), 
            pan_card,
            contact_id, 
            address_id, 
            transaction_id
        ))
        
        conn.commit()
        send_email(to=email, amount=amount, edonid=donationID)#triggers email with dynamic data

        return jsonify({'message': f'Donation recorded successfully with ID: {donationID}'}), 200

    except mysql.connector.Error as err:
        conn.rollback()
        return jsonify({'error': str(err)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/admin/edreport', methods=['GET'])
def get_edonationReport():

    #Creating a connection to database
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    query = """
        SELECT
            e.edonation_id,
            e.donated_on,
            e.first_name,
            e.last_name,
            e.amount_donated,
            e.pancard_number,
            c.phone_number,
            c.email_id,
            a.address_line1,
            a.city_town,
            a.state,
            a.country,
            a.pincode,
            t.transaction_status AS Payment_Status,
            t.mode_of_payment,
            t.upi_id,
            t.transaction_bank
        FROM edonations e
        LEFT JOIN contacts c ON e.contact_id = c.contact_id
        LEFT JOIN addresses a ON e.address_id = a.address_id
        LEFT JOIN transactions t ON e.transactions_id = t.transaction_id
    """
    try:
        cursor.execute(query)
        results = cursor.fetchall()

        return jsonify(results), 200
    
    except mysql.connector.Error as err:
        conn.rollback()
        return jsonify({'error': str(err)}), 500
    
    finally:
        cursor.close()
        conn.close()

@app.route('/admin/feedbacks', methods=['GET'])
def handle_feedbacks():

    #Creating a connection to database
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    query = """
        SELECT * FROM feedbacks
    """
    try:
        cursor.execute(query)
        results = cursor.fetchall()

        return jsonify(results), 200
    
    except mysql.connector.Error as err:
        conn.rollback()
        return jsonify({'error': str(err)}), 500
    
    finally:
        cursor.close()
        conn.close()

@app.route('/admin/update', methods=['POST'])
def submit_update():
    update_data= request.json

    #connect to database
    conn = get_db_connection()
    cursor = conn.cursor()

    # Unpack data from frontend
    update_description= update_data.get('description')

    #saving data to data base
    try:
        cursor.execute("""
            INSERT INTO updates (description) 
            VALUES ( %s )
        """, (update_description,))

        conn.commit()
        return jsonify({'message': 'Update Submitted & noted Successfully!'}), 200

    except mysql.connector.Error as err:
        conn.rollback()
        return jsonify({'error': str(err)}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    #My IP 192.168.0.102
    app.run(debug=True)

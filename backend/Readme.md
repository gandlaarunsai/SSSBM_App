# E-Donation Backend API

Flask-based backend for managing electronic donations, feedback, updates, and email notifications.

## 🚀 Features

- Accept e-donations and store donor details
- Feedback collection system
- Admin reporting endpoints
- Auto-generated donation IDs
- Email confirmation sent to donor

## 🛠 Tech Stack

- Python 3.x
- Flask
- MySQL
- num2words
- SMTP (Gmail)
- dotenv for managing environment variables

## 📁 Project Structure

```pgsql
.
├── app.py
├── requirements.txt
├── README.md
└── utils/
    ├── generate_id.py
    ├── send_email.py
    ├── num_to_words.py
    └── database_creds.py
```

## 🧩 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```
### 2. Create & Activate Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Database Credentials

```python
myCreds = {
    'user': 'your_mysql_username',
    'password': 'your_mysql_password'
}

myDataBase = 'your_database_name'
```

### 5. Run the App

```bash
python app.py
```

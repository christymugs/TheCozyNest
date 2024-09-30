# dashboard/dashboard_setup.py
import pandas as pd
from sqlalchemy import create_engine

def fetch_orders():
    # Connect to PostgreSQL
    engine = create_engine('postgresql+psycopg2://username:password@localhost/ecommerce_dw')
    
    # Fetch data from the database
    orders_df = pd.read_sql('SELECT * FROM orders', engine)
    return orders_df

if __name__ == "__main__":
    orders = fetch_orders()
    print(orders.head())

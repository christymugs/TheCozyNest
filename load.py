# etl/load.py
from sqlalchemy import create_engine

def load_orders(orders_df, customer_summary):
    # Connect to PostgreSQL
    engine = create_engine('postgresql+psycopg2://username:password@localhost/ecommerce_dw')

    # Load transformed data into the 'orders' table
    orders_df.to_sql('orders', engine, if_exists='replace', index=False)
    customer_summary.to_sql('customer_summary', engine, if_exists='replace', index=True)

    print("Data successfully loaded into PostgreSQL!")

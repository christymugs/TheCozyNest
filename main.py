# main.py
from etl.extract import extract_orders
from etl.transform import transform_orders
from etl.load import load_orders

def main():
    # Step 1: Extract
    orders_df = extract_orders()
    
    # Step 2: Transform
    transformed_orders, customer_summary = transform_orders(orders_df)
    
    # Step 3: Load
    load_orders(transformed_orders, customer_summary)

if __name__ == "__main__":
    main()

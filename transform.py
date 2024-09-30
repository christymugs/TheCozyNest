import pandas as pd

def transform_orders(orders_df):
    # Clean up missing values
    orders_df.fillna(value={"shipping_address": "Unknown"}, inplace=True)

    # Add useful columns
    orders_df['total_value'] = orders_df['quantity'] * orders_df['price_per_item']

    # Aggregate by customer
    customer_summary = orders_df.groupby('customer_id').agg({'total_value': 'sum', 'order_id': 'count'})
    customer_summary.columns = ['total_value', 'order_count']
    
    return orders_df, customer_summary

import requests
import pandas as pd

def extract_orders():
    url = "https://your-ecommerce-site.com/api/orders"  
    response = requests.get(url)
    data = response.json()

    # Convert to DataFrame
    orders_df = pd.DataFrame(data['orders'])  
    return orders_df
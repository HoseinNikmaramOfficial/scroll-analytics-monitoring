# backend/src/data-collection/collect-metrics.py

import requests
import psycopg2
from datetime import datetime

DATABASE_URL = 'postgresql://yourusername:yourpassword@localhost:5432/scroll_analytics'

def collect_metrics():
    response = requests.get('https://api.scroll.io/network/metrics')
    data = response.json()

    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()
    query = """
        INSERT INTO metrics (timestamp, transaction_volume, block_time, gas_fee)
        VALUES (%s, %s, %s, %s)
    """
    values = (datetime.now(), data['txVolume'], data['blockTime'], data['gasFee'])
    cur.execute(query, values)
    conn.commit()
    cur.close()
    conn.close()

if __name__ == '__main__':
    collect_metrics()

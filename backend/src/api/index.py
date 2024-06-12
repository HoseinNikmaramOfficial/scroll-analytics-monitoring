# backend/src/api/index.py

from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://yourusername:yourpassword@localhost:5432/scroll_analytics')

def get_latest_metrics():
    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()
    cur.execute("SELECT * FROM metrics ORDER BY timestamp DESC LIMIT 1")
    row = cur.fetchone()
    cur.close()
    conn.close()
    return row

@app.route('/network/metrics', methods=['GET'])
def network_metrics():
    row = get_latest_metrics()
    if row:
        metrics = {
            'id': row[0],
            'timestamp': row[1],
            'transaction_volume': row[2],
            'block_time': row[3],
            'gas_fee': row[4],
        }
        return jsonify(metrics)
    else:
        return jsonify({'error': 'No metrics found'}), 404

if __name__ == '__main__':
    app.run(port=3000)

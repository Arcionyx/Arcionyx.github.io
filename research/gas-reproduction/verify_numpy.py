"""Independent numerical cross-check; the caller supplies the private input CSV."""
import csv
import datetime as dt
import json
import sys
import numpy as np

csv_path, summary_path = sys.argv[1:3]
with open(csv_path, newline='', encoding='utf-8-sig') as handle:
    raw = list(csv.DictReader(handle))
dates = [dt.datetime.strptime(row['Dates'], '%m/%d/%y').date() for row in raw]
prices = np.array([float(row['Prices']) for row in raw])
assert len(prices) == 48
origin = dates[0]
times = np.array([(date - origin).days / 365.25 for date in dates])
design = np.column_stack([np.ones(48), times, np.sin(2*np.pi*times), np.cos(2*np.pi*times)])
coefs = np.linalg.lstsq(design[:36], prices[:36], rcond=None)[0]
holdout = design[36:] @ coefs
rolling = np.array([design[i] @ np.linalg.lstsq(design[:i], prices[:i], rcond=None)[0] for i in range(24,48)])

def score(actual, prediction):
    error = prediction - actual
    return {'mae': float(np.mean(np.abs(error))), 'rmse': float(np.sqrt(np.mean(error**2)))}

with open(summary_path) as handle:
    summary = json.load(handle)
checks = {
    ('holdout', 'model'): score(prices[36:], holdout),
    ('holdout', 'seasonalNaive'): score(prices[36:], prices[24:36]),
    ('rolling', 'model'): score(prices[24:], rolling),
    ('rolling', 'seasonalNaive'): score(prices[24:], prices[12:36]),
}
largest = 0
for (window, method), values in checks.items():
    for metric, value in values.items():
        delta = abs(value-summary[window][method][metric])
        largest = max(largest, delta)
        assert delta < 1e-9, (window, method, metric, delta)
print(json.dumps({'independent_metrics_checked': 8, 'max_absolute_difference': largest, 'numpy_version': np.__version__}))

# Natural-gas follow-up reproduction

**New work dated 2026-11-07, developed with AI assistance.** This package is separate from Ruixi Feng's original J.P. Morgan / Forage submissions. It does not establish that the original submissions had these tests or results.

## What is public

- `gas-model.mjs`: a new joint least-squares trend/annual-harmonic model and a storage-contract prototype.
- `gas-model.test.mjs`: executable checks for model inputs, forecast bounds, cash-flow arithmetic, inventory, rate limits, duplicate event dates, and calendar billing.
- `validate.mjs`: the fixed historical evaluation protocol.
- `verify_numpy.py`: an independent numerical cross-check of the eight reported error measures.
- The website demo uses `syntheticSeries()`, a fully specified generated series, not uploaded price records.
- Aggregate results are published at [`../../assets/gas-validation.json`](../../assets/gas-validation.json).

The original CSV and submitted DOCX files are deliberately excluded. Exact dataset-specific results require the matching input CSV; the SHA-256 in the results identifies it. Anyone can run the model and contract tests or the synthetic demo without that private file.

## Run

Node.js 22 or newer; no npm dependencies:

```sh
node --test research/gas-reproduction/gas-model.test.mjs
node research/gas-reproduction/validate.mjs path/to/input.csv aggregate-results.json
```

The CSV must have `Dates,Prices` columns and 48 consecutive month-end observations. ISO dates and US-style dates are accepted; two-digit US years are interpreted as 2000–2099 for this dataset. No source file is copied or uploaded by the validation script.

Optional independent verification, with Python and NumPy:

```sh
python research/gas-reproduction/verify_numpy.py path/to/input.csv aggregate-results.json
```

## Fixed protocol and results

Model specified before inspecting evaluation results: an intercept, linear time in years, and annual sine/cosine terms, fitted jointly by least squares. The original submission used separate trend and seasonal estimates; these are different implementations.

| Evaluation | Model MAE | Seasonal-naive MAE | Model RMSE | Seasonal-naive RMSE |
| --- | ---: | ---: | ---: | ---: |
| Fixed 12-month holdout | 0.160421 | 0.566667 | 0.208369 | 0.627163 |
| Expanding one-month forecasts | 0.172089 | 0.566667 | 0.219970 | 0.621825 |

Errors use the price units of the supplied CSV, not a separately verified currency or energy unit. Lower is better.

- Fixed holdout: train on 2020-10-31–2023-09-30 (36 points); predict 2023-10-31–2024-09-30 (12 points) without refitting. Baseline: the observed price from the same month one year earlier.
- Rolling check: start with 24 points, refit only on earlier observations, and forecast the next month; 24 predictions. This horizon differs from the fixed 12-month holdout and should not be pooled with it.
- No hyperparameter search on either test window.
- Eight MAE/RMSE values were independently recomputed with NumPy least squares; maximum absolute difference was below 1e-9.
- 27 Node tests passed on 2026-11-07. Counts are scope-limited, not a guarantee of production correctness.

This is one small historical educational series. There is no prediction interval, live-market validation, trading return, or proof that the model will generalize to another regime.

## Contract conventions

The contract engine reports cash-flow value at zero discount rate, with no delivery delay. It supports multiple injection/withdrawal events. Same-day events of the same kind are aggregated before daily caps are checked. On a date containing both, injection is processed first, then withdrawal. Capacity must hold immediately after injection. Remaining inventory must be zero at the end; its value is not silently omitted.

Storage is charged by calendar-month anniversaries anchored to the first event date, clamping to month end when necessary; a started partial month is charged in full. Same-day entry/exit has zero storage months. Transport fees, if used, apply per nonzero daily injection or withdrawal operation after aggregation. These are prototype conventions, not universal contract terms.

The model supports finite negative commodity prices. Volumes, capacity, and daily caps must be positive; fees must be nonnegative. Predictions are limited to the training start through one calendar year after its final observation, with leap-day clamping.

## Attribution

The website separates original submitted work from this new AI-assisted follow-up. Public code and aggregate validation results may be inspected; the owner's private materials remain withheld. No new result is backdated to the original simulation period.

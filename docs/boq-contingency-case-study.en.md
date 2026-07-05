# Case Study: BOQ Import With Contingency

## Context

When importing a BOQ, construction teams need budgets that reflect real risk from day one. The contingency feature addresses this with explicit rules by cost type.

## Functional objective

- Import BOQ with base quantities.
- Define contingency percentage.
- Choose contingency target: materials, labor, or both.
- Confirm project with adjusted and auditable values.

## Flow

1. CSV/BOQ upload.
2. Structured parsing by item and type.
3. Preview with base totals vs contingency totals.
4. Confirmation with persisted revision.

## Calculation rules

- Materials: adjusts quantity to absorb waste and operational variability.
- Labor: adjusts unit rate to cover rework and delay risk.
- Both: applies combined strategy according to selected rule.

## Delivered value

- More realistic budget at project commitment stage.
- Better planned vs actual comparison.
- Faster decisions with transparent preview before commit.

## Frontend UX quality

- Contingency validation with safe range.
- Explicit confirmation for high values.
- Absolute and percentage delta summary in preview.

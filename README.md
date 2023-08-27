To run:
```
npm i
npm run test --project=chromium
```

There should be one test in `tests/example.spec.ts` and if `waitForFunction()` resolved promise results from callbacks the test should hang. However the test does not hang.

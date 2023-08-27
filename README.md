To run:
```
npm i
npm run test --project=chromium
```

There should be one test in `tests/example.spec.ts` and if `waitForFunction()` resolved promise results from the callback the test should hang and timeout. However the test completes because the promise itself is truthy.

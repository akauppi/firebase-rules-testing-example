# What is this?

This is a minimal project that replicates the issues described in [this GitHub Issue](https://github.com/firebase/firebase-js-sdk/issues/4884).

## How to run

1. Navigate to the functions folder and run `npm run install`
2. Open a second tab in the functions folder
3. In one tab run `npm run serve` to start the emulator
4. In the other tab run `npm run test` to run jest


## Expected

Tests to pass, without a warning.

## Actual

```
$ npm test
...
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

Execution does return to the terminal.

By adding `--detectOpenHandles`, the warning goes away (no extra information about the reason of it is gained), but such should a parameter not be necessary.

```
$ npx jest --detectOpenHandles
...
Ran all test suites.
```

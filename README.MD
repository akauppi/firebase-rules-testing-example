# What is this?

This is a minimal project that replicates the issues described in [this GitHub Issue](https://github.com/firebase/firebase-js-sdk/issues/4884).

## Requires

- `firebase-tools` to be globally installed

## How to run

2. Navigate to the functions folder and run `npm run install`
3. Open a second tab in the functions folder
4. In one tab run `npm run serve` to start the emulator
5. In the other tab run `npm run test` to run jest

If everything works correctly the test should pass and you will get a warning message from Jest saying that "Jest did not exit one second after the test run has completed."

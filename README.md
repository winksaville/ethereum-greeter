# A simple contract

Dependencies: testrpc and truffle

To build and run:
```
testrpc -d debugger
rm -rf build
truffle migrate
truffle build
```

Then use chrome to view build/index.html, you should see "Hi from Greeter".

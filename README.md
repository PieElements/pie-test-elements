# @pie-test-elements

some packages used for testing [pie][p] tooling.

[p]: http://pie-framework.org

# install

```shell
yarn install
```

# bin/run-registry

```shell
bin/run-registry --debug --clean
```

This will boot up `verdaccio` and install all the elements in `packages`. You can then use this registry in your tests.

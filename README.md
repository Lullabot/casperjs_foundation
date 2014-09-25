**This piece of logic has been moved to https://www.drupal.org/project/casperjs**

# Automated testing

This directory contains [CasperJS](http://casperjs.org) tests that ensure the
stability of the site.

## Installation

Clone this repository anywhere in your project. Ideally, next to the docroot.
The contents of this repository do not need to be available to a web browser.

### OSX - Homebrew
Homebrew will install the phantomjs dependency automatically.
```bash
brew install casperjs --devel
```

### From Source
```bash
cd /usr/share
sudo git clone git://github.com/n1k0/casperjs.git
cd casperjs
sudo ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs
# Download phantomjs http://phantomjs.org/download.html to /usr/share
cd /usr/share/phantomjs-1.9.2-linux-x86_64/bin
sudo ln -sf `pwd`/phantomjs /usr/local/bin/phantomjs
# Next, install Python 2.6 or greater for casperjs in the bin/ directory.
# Finally, when running `casperjs`, the output should be:
casperjs
CasperJS version 1.1.0-beta3 at /usr/share/casperjs, using phantomjs version 1.9.2
```

## Running tests
Asuming your local environment is set up at http://localhost, all tests may
be run with the following command:

```bash
./testrun
```

You can also run a specific test by giving it as an argument to the command.
homepage.js is a sample test for http://www.msnbc.com. Here is how you could
run it:

```bash
./testrun -u http://www.msnbc.com homepage.js
```

*NOTE* `test` is a wrapper for `casperjs` which sets some useful defaults when
running tests. Run `./testrun -h` for a list of all the available options.

## Writing tests

Tests are JavaScript files which  are located at the `tests` directory.
They can be organized depending on different aspects of the site such as the
homepage, the external header and footer, or the search engine.

`common.js` contains useful methods for all tests and it is included
automatically when running tests.

Some useful resources for writing tests are:
  * [Navigation steps](http://docs.casperjs.org/en/latest/faq.html#how-does-then-and-the-step-stack-work)
    let you wait for certain events such a page getting fully rendered before
    running assertions over it.
  * The [casper](http://docs.casperjs.org/en/latest/modules/casper.html) object has
    commands to interact with the browser such as opening a URL or filling
    out a form.
  * The [test](http://docs.casperjs.org/en/latest/modules/tester.html)
    object contains methods to run assertions over the current context.

## Cookies
PhantomJS (the browser that CasperJS uses for navitation) stores session
data in a cookie file. Future test runs will reuse the cookie if the file is
present. This is the reason why the `test` executable creates a file called
`cookies.txt` while running tests to store cookie information and deletes it
the next time tests are run.

## Tips
### Taking screenshots
You can take a screenshot with `casper.capture('filename');`.

Alternatively, you can use `casper.captureSelector('filename', 'div.some-class');`
to take a screenshot of a given selector.

Find more examples at http://docs.casperjs.org/en/latest/modules/casper.html#capture.

### Evaluating code
[casper.evaluate()](http://docs.casperjs.org/en/latest/modules/casper.html#evaluate)
method (and its alternatives such as `casper.evaluateOrDie()`, `casper.thenEvaluate()` or
`test.assertEvaluate()`) are highly powerful methods since they will run JavaScript
code on the page just as if you were debugging with the browser's JavaScript console.

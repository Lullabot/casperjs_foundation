#!/usr/bin/env bash

# Wrapper executable for casperjs which sets some useful defaults.

usage() {
  echo "Usage: ./testrun [-u http://domain.to.test] [test to run located at tests folder]

Examples:
./testrun >> Runs all tests at http://localhost.
./testrun homepage.js >> Runs homepage.js tests at http://localhost.
./testrun -u http://www.msnbc.com homepage.js >> Runs homepage.js test at http://www.msnbc.com."
  exit 1
}

# Set defaults.
URL='http://localhost'

# Parse options.
while getopts hu: OPTION; do
  case $OPTION in
    h)
      usage
      ;;
    u)
      URL=$OPTARG
      ;;
  esac
done

# Remove the switches we parsed above from the arguments.
shift `expr $OPTIND - 1`

# Now, parse arguments.
TEST=${1-.}

# Remove stored cookies from previous test runs.
rm -f cookies.txt

# Run tests.
echo casperjs --verbose --cookies-file=cookies.txt test --includes=common.js tests/$TEST --root=`pwd` --url=$URL
casperjs --verbose --cookies-file=cookies.txt test --includes=common.js tests/$TEST --root=`pwd` --url=$URL

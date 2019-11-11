#!/usr/bin/env bash

VERSION=${1:-latest}

echo "Pulling image ${VERSION}"
mkdir report

docker run --rm \
    -v "$(pwd)"/report/:/app/report/ \
    lucas-porto1/rest-demo:${VERSION}

status=$?

echo "Final status ${status}"
exit ${status}

#!/bin/bash
if [ ! -z "$BRANCH_NAME_FULL" ]
then
    BRANCH=$BRANCH_NAME_FULL
    if [ "$BRANCH_NAME_FULL" = "develop" ]; then
        echo "On develop, but using beta for Blog submodule"
        BRANCH="beta"
    fi
    git config --file .gitmodules submodule._blog.branch $BRANCH
else
    BRANCH=$CI_COMMIT_REF_SLUG
    if [ "$CI_COMMIT_REF_SLUG" = "develop" ]; then
        echo "On develop, but using beta for Blog submodule"
        BRANCH="beta"
    fi
    git config --file .gitmodules submodule._blog.branch $BRANCH
fi
git submodule update --init --recursive --remote

#!/usr/bin/env bash
# set -e # 에러 발생 시 스크립트 중단

rm .gitignore
branchName=${GITHUB_REF##*/}
deployName="dist/$branchName"

DATEFMT=`date "+%Y%m%d"`
cd build
git config user.name "Entry Dev"
git config user.email "entrydev@nts-corp.com"

if [ "$branchName" = "master" ]
then
    git checkout -b build
else
    git checkout -b "$deployName"
fi

git add .
git commit -m "Entry Tool deploy $deployName"

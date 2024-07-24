#!/usr/bin/env bash
# set -e # 에러 발생 시 스크립트 중단

rm .gitignore
branchName=${GITHUB_REF##*/}
deployName="dist/$branchName"

DATEFMT=`date "+%Y%m%d"`
cd build
git config user.name "Entry Dev"
git config user.email "entrydev@nts-corp.com"

git checkout -b "$deployName"
# git push --delete "https://${GH_TOKEN}@${GH_REF}" "$deployName"
git add .
git commit -m "Entry Tool deploy $deployName"
# git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" "$deployName"

#curl -d '{"tag_name": "v$DATEFMT","target_commitish": "build","name": "v$DATEFMT","body": "Description of the release","draft": false,"prerelease": false}' -X POST "https://developer.github.com/v3/repos/kimokim/entryjs/releases"

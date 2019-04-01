#!/usr/bin/env bash
set -e # 에러 발생 시 스크립트 중단

export NODE_ENV=production
git clone -b build "${GH_REPO}" build
rm -rf build/**/* || exit 0
yarn dist
cp -r dist build/
ls -al
ls -al build

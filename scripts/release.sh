#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

MESSAGE=${1:-"chore: release"}

# Check if there are changes to commit
git add .
if git diff --cached --quiet; then
  echo -e "${YELLOW}No changes to commit${NC}"
  exit 0
fi

echo -e "${GREEN}[1/5] Running tests...${NC}"
if ! pnpm test:run; then
  echo -e "${RED}Tests failed!${NC}"
  git reset HEAD . > /dev/null 2>&1
  exit 1
fi

echo -e "${GREEN}[2/5] Building storybook...${NC}"
if ! pnpm build-storybook > /dev/null 2>&1; then
  echo -e "${RED}Storybook build failed!${NC}"
  git reset HEAD . > /dev/null 2>&1
  exit 1
fi

echo -e "${GREEN}[3/5] Building package...${NC}"
if ! pnpm build > /dev/null 2>&1; then
  echo -e "${RED}Package build failed!${NC}"
  git reset HEAD . > /dev/null 2>&1
  exit 1
fi

echo -e "${GREEN}[4/5] Bumping version...${NC}"
npm version patch --no-git-tag-version > /dev/null
NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "  New version: ${YELLOW}${NEW_VERSION}${NC}"

git add .
git commit -m "$MESSAGE (v$NEW_VERSION)"

echo -e "${GREEN}[5/5] Pushing...${NC}"
if ! git push; then
  echo -e "${RED}Push failed! Rolling back...${NC}"
  git reset --hard HEAD~1
  exit 1
fi

echo -e "${GREEN}✅ Released v${NEW_VERSION}${NC}"

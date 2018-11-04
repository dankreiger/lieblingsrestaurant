#!/bin/sh
YELLOW='\033[1;33m';CYAN='\033[0;36m';GREEN='\033[0;32m';RED='\033[0;31m';NC='\033[0m' # No Color

clear

if [ ! -f .env ]; then
  echo;echo;
  printf "Enter your ${CYAN}api key${NC}, followed by [ENTER]:"
  read APIKEY
  if [ -z "$APIKEY" ]
  then
    echo
    printf "${RED}Google api key is unset${NC}. Please try ${GREEN}npm start${NC} or ${GREEN}yarn start${NC} again"
    echo;echo;echo;
  else
    touch .env
    FMT_APIKEY="$(echo "${APIKEY}" | tr -d '[:space:]')"
    # sed -i '' "s/YOUR_API_KEY/$APIKEY/g" public/index.html
    echo "REACT_APP_RESTAURANT_API_KEY=${FMT_APIKEY}" > .env
    npm run start:scripts
  fi
else
  npm run start:scripts
fi


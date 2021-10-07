set /p commit_log=Your commit log:
git status
git add -A
git commit -m "%commit_log%"
git push github source
pause
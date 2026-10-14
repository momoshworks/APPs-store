@echo off
echo ========================================================
echo   Launching DUMU Download Web Server on http://localhost:8080
echo ========================================================
start "" "http://localhost:8080"
python -m http.server 8080
if %errorlevel% neq 0 (
  start "" "%~dp0index.html"
)
pause

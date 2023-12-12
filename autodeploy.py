# -*- coding: utf-8 -*-

import subprocess
import time
import curses

def deploy():
    subprocess.call(["git", "add", "."])
    subprocess.call(["git", "commit", "-m", "'auto-deploy'"])
    subprocess.call(["git", "push", "-u", "origin", "master"])

if __name__ == "__main__":
    deploy_interval = 30 * 60
    session = True

    # Инициализация curses
    stdscr = curses.initscr()
    curses.cbreak()
    stdscr.keypad(True)

    while session:
        deploy()
        print("Проект успешно задеплоен.")

        # Проверка нажатия клавиши 'x'
        key = stdscr.getch()
        if key == ord('x'):
            print("Нажата клавиша 'x'. Остановка сессии.")
            break

        time.sleep(deploy_interval)

    # Завершение curses
    curses.endwin()

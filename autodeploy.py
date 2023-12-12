# -*- coding: utf-8 -*-

import subprocess
import time
import pygame

def deploy():
    subprocess.call(["git", "add", "."])
    subprocess.call(["git", "commit", "-m", "'auto-deploy'"])
    subprocess.call(["git", "push", "-u", "origin", "master"])

if __name__ == "__main__":
    deploy_interval = 30 * 60
    session = True

    pygame.init()
    clock = pygame.time.Clock()

    while session:
        deploy()
        print("Проект успешно задеплоен.")

        # Проверка нажатия клавиши 'x'
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN and event.key == pygame.K_x:
                print("Нажата клавиша 'x'. Остановка сессии.")
                session = False

        clock.tick(10)
        time.sleep(deploy_interval)

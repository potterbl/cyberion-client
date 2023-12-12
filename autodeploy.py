# -*- coding: utf-8 -*-

import subprocess
import time

def deploy():
    subprocess.call(["git", "add", "."])
    subprocess.call(["git", "commit", "-m", "'auto-deploy'"])
    subprocess.call(["git", "push", "-u", "origin", "master"])

if __name__ == "__main__":
    deploy_interval = 30 * 60

    while True:
        deploy()
        print("Проект успешно задеплоен.")
        time.sleep(deploy_interval)
